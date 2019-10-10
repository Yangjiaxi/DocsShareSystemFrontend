import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import {
  GET_MY_DOCS_BEGIN,
  toggleProgress,
  getMyDocsFinish,
} from "../../actions";

import { API } from "../../const";

import { checkToken, customError, errHandler } from "..";

export const getMyEpic = action$ =>
  action$.pipe(
    ofType(GET_MY_DOCS_BEGIN),
    mergeMap(() => {
      const token = checkToken();
      return ajax
        .getJSON(`${API}/doc/my`, { Authorization: `Bearer ${token}` })
        .pipe(
          mergeMap(res => {
            if (res.type === "success") {
              const { data } = res;
              return of(getMyDocsFinish(data));
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
