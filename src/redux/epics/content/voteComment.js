import { ofType } from "redux-observable";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { VOTE_COMMENT_START, toggleProgress } from "../../actions";

import { checkToken, errHandler } from "..";

export const voteCommentEpic = (action$, state$, { socket$ }) =>
  socket$.pipe(
    switchMap(socket => {
      if (!socket) {
        return EMPTY;
      }
      return action$.pipe(
        ofType(VOTE_COMMENT_START),
        tap(({ floorID, commentID, vote }) => {
          const token = checkToken();
          const {
            content: { id },
          } = state$.value;
          socket.emit("voteComment", { id, token, floorID, commentID, vote });
        }),
        map(() => toggleProgress(true)),
        catchError(err => errHandler(err)),
      );
    }),
  );
