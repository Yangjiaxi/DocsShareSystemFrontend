import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import { push } from "connected-react-router";

import {
  CHECKOUT_CONTENT_START,
  toggleProgress,
  checkoutContentFinish,
  socketStart,
} from "../../actions";

import { API } from "../../const";

import { checkToken, customError, errHandler } from "..";

export const checkoutDocEpic = action$ =>
  action$.pipe(
    ofType(CHECKOUT_CONTENT_START),
    mergeMap(({ id }) => {
      const token = checkToken();
      return ajax
        .getJSON(`${API}/content/checkout/${id}`, {
          Authorization: `Bearer ${token}`,
        })
        .pipe(
          mergeMap(res => {
            if (res.type === "success") {
              const { contents, id: docID, time, title, isOwned } = res;
              return of(
                checkoutContentFinish(docID, title, time, contents, isOwned),
                socketStart(docID),
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
