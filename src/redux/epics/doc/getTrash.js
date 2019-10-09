import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import {
  GET_TRASH_DOCS_BEGIN,
  toggleProgress,
  getTrashDocsFinish,
} from "../../actions";

import { API } from "../../const";

import { checkToken, customError, errHandler } from "..";

export const getTrashEpic = action$ =>
  action$.pipe(
    ofType(GET_TRASH_DOCS_BEGIN),
    mergeMap(() => {
      const token = checkToken();
      return ajax
        .getJSON(`${API}/doc/trash`, { Authorization: `Bearer ${token}` })
        .pipe(
          mergeMap(res => {
            if (res.type === "success") {
              const { data } = res;
              console.log("Trash", data);
              return of(getTrashDocsFinish(data));
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
