import { combineReducers } from "redux";

import { connectRouter } from "connected-react-router";

import { userReducer } from "./user";
import { componentReducer } from "./component";

export const rootReducers = history =>
  combineReducers({
    component: componentReducer,
    user: userReducer,
    router: connectRouter(history),
  });
