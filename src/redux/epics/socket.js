import { ofType } from "redux-observable";
import { Observable, EMPTY } from "rxjs";
import { ignoreElements, switchMap, tap, mergeMap } from "rxjs/operators";

import {
  SOCKET_START,
  SOCKET_END,
  toggleProgress,
  enqueueSnackbar,
  changeTitleFinish,
  appendFloorFinish,
  changeFloorFinish,
  deleteFloorFinish,
  addCommentFinish,
  voteCommentFinish,
  moveFloorFinish,
  checkoutContentStart,
} from "../actions";

import { i18nHelper } from "../../i18n";

import { API } from "../const";

const socketConnectEpic = (action$, state$, { io, socket$ }) =>
  action$.pipe(
    ofType(SOCKET_START),
    switchMap(
      ({ id }) =>
        new Observable(o => {
          const socket = io(API, {
            query: { id },
          });
          socket.on("connect", () => o.next(socket));
        }),
    ),
    tap(socket$),
    ignoreElements(),
  );

const socketDisconnectEpic = (action$, state$, { socket$ }) =>
  action$.pipe(
    ofType(SOCKET_END),
    mergeMap(() => {
      socket$.getValue().close();
      return EMPTY;
    }),
    ignoreElements(),
  );

const socketEventEpic = (action$, state$, { socket$ }) =>
  socket$.pipe(
    switchMap(socket =>
      !socket
        ? EMPTY
        : new Observable(o => {
          // disconnected by accident
          socket.on("disconnect", () => {
            o.next(
              enqueueSnackbar(i18nHelper.disconnected, { variant: "info" }),
            );
          });
          // trying
          socket.on("reconnecting", () => {
            o.next(
              enqueueSnackbar(i18nHelper.reconnectAttempt, {
                variant: "info",
              }),
            );
          });
          // success
          socket.on("reconnect", () => {
            const {
              content: { id },
            } = state$.value;
            o.next(checkoutContentStart(id));
          });
        }),
    ),
  );

const socketReceiveEpic = (action$, state$, { socket$ }) =>
  socket$.pipe(
    switchMap(socket =>
      !socket
        ? EMPTY
        : new Observable(o => {
          socket.on("connected", () => {
            o.next(
              enqueueSnackbar(i18nHelper.socketConnected, {
                variant: "success",
              }),
            );
          });
          // change title
          socket.on("changeTitle", ({ content }) => {
            o.next(toggleProgress(true));
            o.next(changeTitleFinish(content));
            o.next(toggleProgress());
          });
          socket.on("changeTitleError", res => {
            const { message, type } = res;
            o.next(enqueueSnackbar(message, { variant: type || "error" }));
            o.next(toggleProgress());
          });
          // append floor
          socket.on("appendFloor", ({ time, content, id }) => {
            o.next(toggleProgress(true));
            o.next(appendFloorFinish(id, time, content));
            o.next(toggleProgress());
          });
          socket.on("appendFloorError", res => {
            const { message, type } = res;
            o.next(enqueueSnackbar(message, { variant: type || "error" }));
            o.next(toggleProgress());
          });
          // change floor
          socket.on("changeFloor", ({ time, content, id }) => {
            o.next(toggleProgress(true));
            o.next(changeFloorFinish(id, time, content));
            o.next(toggleProgress());
          });
          socket.on("changeFloorError", res => {
            const { message, type } = res;
            o.next(enqueueSnackbar(message, { variant: type || "error" }));
            o.next(toggleProgress());
          });
          // delete floor
          socket.on("deleteFloor", ({ id }) => {
            o.next(toggleProgress(true));
            o.next(deleteFloorFinish(id));
            o.next(toggleProgress());
          });
          socket.on("deleteFloorError", res => {
            const { message, type } = res;
            o.next(enqueueSnackbar(message, { variant: type || "error" }));
            o.next(toggleProgress());
          });
          // move floor
          socket.on("moveFloor", ({ from, to }) => {
            o.next(toggleProgress(true));
            o.next(moveFloorFinish(from, to));
            o.next(toggleProgress());
          });
          socket.on("moveFloorError", res => {
            const { message, type } = res;
            o.next(enqueueSnackbar(message, { variant: type || "error" }));
            o.next(toggleProgress());
          });
          // add comment
          socket.on("addComment", ({ floorID }) => {
            o.next(toggleProgress(true));
            o.next(addCommentFinish(floorID));
            o.next(toggleProgress());
          });
          socket.on("addCommentError", res => {
            const { message, type } = res;
            o.next(enqueueSnackbar(message, { variant: type || "error" }));
            o.next(toggleProgress());
          });
          // vote comment
          socket.on("voteComment", ({ floorID }) => {
            o.next(toggleProgress(true));
            o.next(voteCommentFinish(floorID));
            o.next(toggleProgress());
          });
          socket.on("voteCommentError", res => {
            const { message, type } = res;
            o.next(enqueueSnackbar(message, { variant: type || "error" }));
            o.next(toggleProgress());
          });
        }),
    ),
  );

export default [
  socketConnectEpic,
  socketReceiveEpic,
  socketEventEpic,
  socketDisconnectEpic,
];
