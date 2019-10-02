import { createBrowserHistory as createHistory } from "history";
import React, { memo, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { epicMiddleware, epics } from "./redux/epics";
import { reducers } from "./redux/reducers";
import Index from "./pages/Index";

createHistory();

const middleware = [epicMiddleware];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);

epicMiddleware.run(epics);

const App = memo(() => {
  useEffect(() => {
    import("./utils").then(({ logger }) => logger());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Index />
      </Router>
    </Provider>
  );
});

export default App;
