import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import { push } from "connected-react-router";

import {
  CREATE_DOC_START,
  toggleProgress,
  enqueueSnackbar,
  createDocFinish,
  shouldUpdateRecent,
  shouldUpdateMy,
} from "../../actions";

import { API } from "../../const";

import { checkToken, customError, errHandler } from "..";
import { i18nHelper } from "../../../i18n";

export const createDocEpic = action$ =>
  action$.pipe(
    ofType(CREATE_DOC_START),
    mergeMap(() => {
      const token = checkToken();
      return ajax
        .getJSON(`${API}/doc/new`, { Authorization: `Bearer ${token}` })
        .pipe(
          mergeMap(res => {
            if (res.type === "success") {
              const { data: docID } = res;
              return of(
                createDocFinish(),
                push(`/doc/${docID}`),
                enqueueSnackbar(i18nHelper.createDocSuccess, {
                  variant: "success",
                }),
                shouldUpdateRecent(),
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
