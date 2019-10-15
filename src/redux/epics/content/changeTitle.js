import { ofType } from "redux-observable";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { CHANGE_TITLE_START, toggleProgress } from "../../actions";

import { checkToken, errHandler } from "..";

export const changeTitleEpic = (action$, state$, { socket$ }) =>
  socket$.pipe(
    switchMap(socket => {
      if (!socket) {
        return EMPTY;
      }
      return action$.pipe(
        ofType(CHANGE_TITLE_START),
        tap(({ title }) => {
          const token = checkToken();
          const {
            content: { id },
          } = state$.value;
          socket.emit("changeTitle", { id, content: title, token });
        }),
        map(() => toggleProgress(true)),
        catchError(err => errHandler(err)),
      );
    }),
  );
