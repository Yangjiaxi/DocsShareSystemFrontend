import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import {
  DESTROY_DOC_BEGIN,
  toggleProgress,
  destroyDocFinish,
  enqueueSnackbar,
  shouldUpdateTrash,
} from "../../actions";

import { API } from "../../const";

import { i18nHelper } from "../../../i18n";

import { customError, errHandler, checkToken } from "..";

export const destroyDocEpic = action$ =>
  action$.pipe(
    ofType(DESTROY_DOC_BEGIN),
    mergeMap(({ id }) => {
      const token = checkToken();
      return ajax
        .delete(`${API}/doc/destroy/${id}`, {
          Authorization: `Bearer ${token}`,
        })
        .pipe(
          mergeMap(({ response: res }) => {
            const { type } = res;
            if (type === "success") {
              return of(
                enqueueSnackbar(i18nHelper.destroySuccess, {
                  variant: "success",
                }),
                destroyDocFinish(),
                shouldUpdateTrash(),
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
