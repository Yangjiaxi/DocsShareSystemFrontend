import { combineReducers } from "redux";

import { connectRouter } from "connected-react-router";

import { userReducer } from "./user";
import { componentReducer } from "./component";
import { docsReducer } from "./docs";

export const rootReducers = history =>
  combineReducers({
    docs: docsReducer,
    component: componentReducer,
    user: userReducer,
    router: connectRouter(history),
  });
