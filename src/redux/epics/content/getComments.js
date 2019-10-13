import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import {
  GET_COMMENT_START,
  toggleProgress,
  getCommentFinish,
} from "../../actions";

import { API } from "../../const";

import { checkToken, customError, errHandler } from "..";

export const getCommentEpic = action$ =>
  action$.pipe(
    ofType(GET_COMMENT_START),
    mergeMap(({ id }) => {
      const token = checkToken();
      return ajax
        .getJSON(`${API}/content/comment/${id}`, {
          Authorization: `Bearer ${token}`,
        })
        .pipe(
          mergeMap(res => {
            if (res.type === "success") {
              const {
                data: { id: floorID, comments },
              } = res;
              return of(getCommentFinish(floorID, comments));
            }
            throw customError(res);
          }),
          startWith(toggleProgress(true)),
          endWith(toggleProgress()),
          catchError(err => errHandler(err)),
        );
    }),
    catchError(err => errHandler(err)),
  );
