import React, { memo, Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router";

import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import { colorDict } from "../../utils/color";

import Progress from "../../components/Progress";
import PageFrame from "../../components/Frame";
import MiniFrame from "../../components/MiniFrame";
import Notifier from "../../components/Notifier";
import Snackbar from "../../components/Snackbar";

const Login = lazy(() => import("../Login"));
const Register = lazy(() => import("../Register"));

const Doc = lazy(() => import("../Doc"));
const Recent = lazy(() => import("../Recent"));
const My = lazy(() => import("../My"));
const Shared = lazy(() => import("../Shared"));
const Trash = lazy(() => import("../Trash"));

const MyInfo = lazy(() => import("../MyInfo"));
const About = lazy(() => import("../About"));

const NoMatch = lazy(() => import("../NoMatch"));

const Index = memo(({ themeMode, themeColor }) => {
  const mainFrame = Component => props => {
    const {
      match: {
        params: { docID },
      },
    } = props;
    return (
      <PageFrame>
        <Suspense fallback={<Progress />}>
          <Component docID={docID || undefined} />
        </Suspense>
      </PageFrame>
    );
  };

  const miniFrame = Component => () => (
    <MiniFrame>
      <Suspense fallback={<Progress />}>
        <Component />
      </Suspense>
    </MiniFrame>
  );

  const colorObj = colorDict[themeColor];
  const needChangeSecondary = ["red", "pink"].includes(themeColor);

  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: colorObj,
      secondary: needChangeSecondary ? colorDict.blue : undefined,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Snackbar>
        <Notifier />
      </Snackbar>
      <Switch>
        <Route path="/login" exact render={miniFrame(Login)} />
        <Route path="/register" exact render={miniFrame(Register)} />
        <Route path="/" exact render={mainFrame(Recent)} />
        <Route path="/shared" exact render={mainFrame(Shared)} />
        <Route path="/my" exact render={mainFrame(My)} />
        <Route path="/trash" exact render={mainFrame(Trash)} />
        <Route path="/profile" exact render={mainFrame(MyInfo)} />
        <Route path="/about" exact render={mainFrame(About)} />
        <Route path="/doc/:docID?" render={mainFrame(Doc)} />
        <Route render={mainFrame(NoMatch)} />
      </Switch>
    </ThemeProvider>
  );
});

export default withRouter(Index);
