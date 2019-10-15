import { ofType } from "redux-observable";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { ADD_COMMENT_START, toggleProgress } from "../../actions";

import { checkToken, errHandler } from "..";

export const addCommentEpic = (action$, state$, { socket$ }) =>
  socket$.pipe(
    switchMap(socket => {
      if (!socket) {
        return EMPTY;
      }
      return action$.pipe(
        ofType(ADD_COMMENT_START),
        tap(({ floorID, content }) => {
          const token = checkToken();
          const {
            content: { id },
          } = state$.value;
          socket.emit("addComment", { id, token, floorID, content });
        }),
        map(() => toggleProgress(true)),
        catchError(err => errHandler(err)),
      );
    }),
  );
