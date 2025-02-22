import React, { memo, useEffect } from "react";
import { Redirect } from "react-router";

import { Container, useMediaQuery, useTheme, Fab } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import Progress from "../Progress";
import Slider from "../Silder";
import AppBar from "../AppBar";

import useStyles from "./style";

const Frame = memo(
  ({ children, loggedIn, isLoading, toggleSlider, detectWidth }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    useEffect(() => {
      detectWidth(isMobile);
    }, [isMobile, detectWidth]);

    const MobileFab = () => (
      <>
        {isMobile && (
          <Fab
            className={classes.fab}
            color="primary"
            onClick={() => toggleSlider()}
          >
            <MenuIcon />
          </Fab>
        )}
      </>
    );

    return loggedIn ? (
      <div className={classes.root}>
        <AppBar />
        <Slider />
        <MobileFab />
        <Container maxWidth="xl" className={classes.content}>
          {children}
        </Container>
        {isLoading && <Progress />}
      </div>
    ) : (
      <Redirect to="/login" />
    );
  },
);

export default Frame;
