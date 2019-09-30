import React, { memo, useEffect } from "react";
import { Redirect } from "react-router";

import { Container } from "@material-ui/core";

import Progress from "../Progress";

import AppBar from "../AppBar";

import useStyles from "./style";

const Frame = memo(({ children, loggedIn, isLoading }) => {
  const classes = useStyles();

  useEffect(() => {}, []);

  return loggedIn ? (
    <div className={classes.root}>
      <AppBar />
      <Container className={classes.content}>{children}</Container>
      {isLoading && <Progress />}
    </div>
  ) : (
    <Redirect to="/login" />
  );
});

export default Frame;
