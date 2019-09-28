import { combineEpics, createEpicMiddleware } from "redux-observable";
import { BehaviorSubject, of } from "rxjs";

import io from "socket.io-client";

import { enqueueSnackbar, toggleProgress } from "../actions";

import userEpic from "./user";

export const customError = error => {
  const err = new Error(error.message);
  err.type = error.type;
  return err;
};

export const errHandler = ({ message, type }, customAction) =>
  customAction
    ? of(
        enqueueSnackbar(`ERROR: ${message}`, { variant: type || "error" }),
        toggleProgress(),
        customAction
      )
    : of(
        toggleProgress(),
        enqueueSnackbar(`ERROR: ${message}`, { variant: type || "error" })
      );

const dependencies = { io, socket$: new BehaviorSubject(), sessionStorage };

export const epicMiddleware = createEpicMiddleware({
  dependencies
});

export const epics = combineEpics(...userEpic);
