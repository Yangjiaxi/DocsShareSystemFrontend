import { ofType } from "redux-observable";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { CHANGE_FLOOR_START, toggleProgress } from "../../actions";

import { checkToken, errHandler } from "..";

export const changeFloorEpic = (action$, state$, { socket$ }) =>
  socket$.pipe(
    switchMap(socket => {
      if (!socket) {
        return EMPTY;
      }
      return action$.pipe(
        ofType(CHANGE_FLOOR_START),
        tap(({ content, floorID }) => {
          const token = checkToken();
          const {
            content: { id },
          } = state$.value;
          console.log(content, floorID);
          socket.emit("changeFloor", { id, token, content, floorID });
        }),
        map(() => toggleProgress(true)),
        catchError(err => errHandler(err)),
      );
    }),
  );
