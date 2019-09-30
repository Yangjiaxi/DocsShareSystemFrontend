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

const HomePage = lazy(() => import("../HomePage"));
const Doc = lazy(() => import("../Doc"));
const NoMatch = lazy(() => import("../NoMatch"));

const Index = memo(({ themeMode, themeColor }) => {
  const routeRender = Component => props => {
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
        <Route path="/" exact render={routeRender(HomePage)} />
        <Route path="/doc/:docID?" render={routeRender(Doc)} />
        <Route render={routeRender(NoMatch)} />
      </Switch>
    </ThemeProvider>
  );
});

export default withRouter(Index);
