import { ofType } from "redux-observable";
import { Observable, EMPTY } from "rxjs";
import { ignoreElements, switchMap, tap } from "rxjs/operators";

import {
  SOCKET_START,
  toggleProgress,
  enqueueSnackbar,
  changeTitleFinish,
  appendFloorFinish,
  changeFloorFinish,
  deleteFloorFinish,
  addCommentFinish,
} from "../actions";

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
          socket.on("disconnect", socket.close);
        }),
    ),
    tap(socket$),
    ignoreElements(),
  );

const socketReceiveEpic = (action$, state$, { socket$ }) =>
  socket$.pipe(
    switchMap(socket =>
      !socket
        ? EMPTY
        : new Observable(o => {
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
        }),
    ),
  );

export default [socketConnectEpic, socketReceiveEpic];
