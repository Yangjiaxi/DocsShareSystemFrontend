import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import {
  DELETE_DOC_BEGIN,
  toggleProgress,
  deleteDocFinish,
  enqueueSnackbar,
  shouldUpdateRecent,
  shouldUpdateShared,
} from "../../actions";

import { API } from "../../const";

import { i18nHelper } from "../../../i18n";

import { customError, errHandler, checkToken } from "..";

export const deleteDocEpic = action$ =>
  action$.pipe(
    ofType(DELETE_DOC_BEGIN),
    mergeMap(({ id }) => {
      const token = checkToken();
      return ajax
        .delete(`${API}/doc/delete/${id}`, { Authorization: `Bearer ${token}` })
        .pipe(
          mergeMap(({ response: res }) => {
            const { type } = res;
            if (type === "success") {
              return of(
                enqueueSnackbar(i18nHelper.deleteSuccess, {
                  variant: "success",
                }),
                deleteDocFinish(),
                shouldUpdateRecent(),
                shouldUpdateShared(),
              );
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
