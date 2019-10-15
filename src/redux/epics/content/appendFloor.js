import { ofType } from "redux-observable";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { APPEND_FLOOR_START, toggleProgress } from "../../actions";

import { checkToken, errHandler } from "..";

export const appendFloorEpic = (action$, state$, { socket$ }) =>
  socket$.pipe(
    switchMap(socket => {
      if (!socket) {
        return EMPTY;
      }
      return action$.pipe(
        ofType(APPEND_FLOOR_START),
        tap(() => {
          const token = checkToken();
          const {
            content: { id },
          } = state$.value;
          socket.emit("appendFloor", { id, token });
        }),
        map(() => toggleProgress(true)),
        catchError(err => errHandler(err)),
      );
    }),
  );
