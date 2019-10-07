import { combineEpics, createEpicMiddleware } from "redux-observable";
import { BehaviorSubject, of } from "rxjs";
import io from "socket.io-client";

import { enqueueSnackbar, toggleProgress } from "../actions";
import userEpic from "./user";
import { store } from "../../App";
import { i18nHelper } from "../../i18n";

export const customError = error => {
  const err = new Error(error.message);
  err.type = error.type;
  return err;
};

export const checkToken = () => {
  const { token } = store.getState().user;
  if (!token) {
    throw customError({ message: i18nHelper.NO_JWT });
  }
  return token;
};

export const errHandler = ({ message, type }, customAction) => {
  if (customAction) {
    of(
      toggleProgress(),
      enqueueSnackbar(message, { variant: type || "error" }),
      customAction,
    );
  } else {
    of(
      toggleProgress(),
      enqueueSnackbar(message, { variant: type || "error" }),
    );
  }
};

const dependencies = { io, socket$: new BehaviorSubject(), sessionStorage };

export const epicMiddleware = createEpicMiddleware({
  dependencies,
});

export const epics = combineEpics(...userEpic);
