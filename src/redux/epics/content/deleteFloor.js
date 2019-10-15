import { ofType } from "redux-observable";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { DELETE_FLOOR_START, toggleProgress } from "../../actions";

import { checkToken, errHandler } from "..";

export const deleteFloorEpic = (action$, state$, { socket$ }) =>
  socket$.pipe(
    switchMap(socket => {
      if (!socket) {
        return EMPTY;
      }
      return action$.pipe(
        ofType(DELETE_FLOOR_START),
        tap(({ id: floorID }) => {
          const token = checkToken();
          const {
            content: { id },
          } = state$.value;
          socket.emit("deleteFloor", { id, token, floorID });
        }),
        map(() => toggleProgress(true)),
        catchError(err => errHandler(err)),
      );
    }),
  );
