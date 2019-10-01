import React, { memo, Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router";

import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import { colorDict } from "../../utils/color";

import Progress from "../../components/Progress";
import PageFrame from "../../components/Frame";
import Login from "../../components/Login";
import Notifier from "../../components/Notifier";
import Snackbar from "../../components/Snackbar";

const Doc = lazy(() => import("../Doc"));
const Recent = lazy(() => import("../Recent"));
const Shared = lazy(() => import("../Shared"));
const Trash = lazy(() => import("../Trash"));
const About = lazy(() => import("../About"));
const NoMatch = lazy(() => import("../NoMatch"));

const Index = memo(({ themeMode, themeColor }) => {
  const frameRender = Component => props => {
    const {
      match: {
        params: { docID }
      }
    } = props;
    return (
      <PageFrame>
        <Suspense fallback={<Progress />}>
          <Component docID={docID || undefined} />
        </Suspense>
      </PageFrame>
    );
  };

  const colorObj = colorDict[themeColor];
  const needChangeSecondary = ["red", "pink"].includes(themeColor);

  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: colorObj,
      secondary: needChangeSecondary ? colorDict.blue : undefined
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Snackbar>
        <Notifier />
      </Snackbar>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact render={frameRender(Recent)} />
        <Route path="/shared" exact render={frameRender(Shared)} />
        <Route path="/trash" exact render={frameRender(Trash)} />
        <Route path="/about" exact render={frameRender(About)} />
        <Route path="/doc/:docID?" render={frameRender(Doc)} />
        <Route render={frameRender(NoMatch)} />
      </Switch>
    </ThemeProvider>
  );
});

export default withRouter(Index);
