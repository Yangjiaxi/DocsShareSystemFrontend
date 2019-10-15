import { ofType } from "redux-observable";
import { Observable, EMPTY } from "rxjs";
import { ignoreElements, switchMap, tap } from "rxjs/operators";

import {
  SOCKET_START,
  toggleProgress,
  changeTitleFinish,
  enqueueSnackbar,
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

          socket.on("send", n => console.log("get", n));
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
          }),
    ),
  );

export default [socketConnectEpic, socketReceiveEpic];
