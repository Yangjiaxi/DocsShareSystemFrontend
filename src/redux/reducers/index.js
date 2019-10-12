import { combineReducers } from "redux";

import { connectRouter } from "connected-react-router";

import { userReducer } from "./user";
import { componentReducer } from "./component";
import { docsReducer } from "./docs";
import { contentReducer } from "./content";

export const rootReducers = history =>
  combineReducers({
    docs: docsReducer,
    component: componentReducer,
    user: userReducer,
    content: contentReducer,
    router: connectRouter(history),
  });
