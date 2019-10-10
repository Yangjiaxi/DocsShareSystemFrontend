import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import {
  RESTORE_DOC_BEGIN,
  toggleProgress,
  restoreDocFinish,
  enqueueSnackbar,
  shouldUpdateRecent,
  shouldUpdateShared,
  shouldUpdateTrash,
  shouldUpdateMy,
} from "../../actions";

import { API } from "../../const";

import { i18nHelper } from "../../../i18n";

import { customError, errHandler, checkToken } from "..";

export const restoreDocEpic = action$ =>
  action$.pipe(
    ofType(RESTORE_DOC_BEGIN),
    mergeMap(({ id }) => {
      const token = checkToken();
      return ajax
        .get(`${API}/doc/restore/${id}`, {
          Authorization: `Bearer ${token}`,
        })
        .pipe(
          mergeMap(({ response: res }) => {
            const { type } = res;
            if (type === "success") {
              return of(
                enqueueSnackbar(i18nHelper.restoreSuccess, {
                  variant: "success",
                }),
                restoreDocFinish(),
                shouldUpdateRecent(),
                shouldUpdateShared(),
                shouldUpdateTrash(),
                shouldUpdateMy(),
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
