import { ofType } from "redux-observable";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { MOVE_FLOOR_START, toggleProgress } from "../../actions";

import { checkToken, errHandler } from "..";

export const moveFloorEpic = (action$, state$, { socket$ }) =>
  socket$.pipe(
    switchMap(socket => {
      if (!socket) {
        return EMPTY;
      }
      return action$.pipe(
        ofType(MOVE_FLOOR_START),
        tap(({ from, to }) => {
          const token = checkToken();
          const {
            content: { id },
          } = state$.value;
          socket.emit("moveFloor", { id, token, from, to });
        }),
        map(() => toggleProgress(true)),
        catchError(err => errHandler(err)),
      );
    }),
  );
