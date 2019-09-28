import React, { memo, useEffect } from "react";
import { Redirect } from "react-router";

import Progress from "../Progress";

import AppBar from "../AppBar";

import useStyles from "./style";

const Frame = memo(({ children, loggedIn }) => {
  const classes = useStyles();
  const loading = false;

  useEffect(() => {}, []);

  return loggedIn ? (
    <div className={classes.root}>
      <AppBar />
      <main className={classes.content}>{children}</main>
      {loading && <Progress />}
    </div>
  ) : (
    <Redirect to="/login" />
  );
});

export default Frame;
