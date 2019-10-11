import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import {
  GET_RECENT_DOCS_BEGIN,
  toggleProgress,
  getRecentDocsFinish,
} from "../../actions";

import { API } from "../../const";

import { checkToken, customError, errHandler } from "..";

export const getRecentEpic = action$ =>
  action$.pipe(
    ofType(GET_RECENT_DOCS_BEGIN),
    mergeMap(() => {
      const token = checkToken();
      return ajax
        .getJSON(`${API}/doc/recent`, { Authorization: `Bearer ${token}` })
        .pipe(
          mergeMap(res => {
            if (res.type === "success") {
              const { data } = res;
              return of(getRecentDocsFinish(data));
            }
            throw customError(res);
          }),
          startWith(toggleProgress(true)),
          endWith(toggleProgress(false)),
          catchError(err => errHandler(err)),
        );
    }),
    catchError(err => errHandler(err)),
  );
