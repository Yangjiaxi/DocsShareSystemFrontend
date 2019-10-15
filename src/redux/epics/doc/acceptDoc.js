import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import { push } from "connected-react-router";

import {
  ACCEPT_DOC_START,
  toggleProgress,
  acceptDocFinish,
  shouldUpdateRecent,
  shouldUpdateShared,
  enqueueSnackbar,
} from "../../actions";

import { API } from "../../const";

import { checkToken, customError, errHandler } from "..";
import { i18nHelper } from "../../../i18n";

export const acceptDocEpic = action$ =>
  action$.pipe(
    ofType(ACCEPT_DOC_START),
    mergeMap(({ id }) => {
      const token = checkToken();
      return ajax
        .getJSON(`${API}/doc/accept/${id}`, {
          Authorization: `Bearer ${token}`,
        })
        .pipe(
          mergeMap(res => {
            if (res.type === "success") {
              return of(
                acceptDocFinish(),
                shouldUpdateRecent(),
                shouldUpdateShared(),
                enqueueSnackbar(i18nHelper.acceptSuccess, { variant: "info" }),
              );
            }
            throw customError(res);
          }),
          startWith(toggleProgress(true)),
          endWith(toggleProgress()),
          catchError(err => errHandler(err, push("/"))),
        );
    }),
    catchError(err => errHandler(err)),
  );
