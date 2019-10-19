import React, { memo } from "react";

import { Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

import { i18nHelper, TextTermMaker } from "../i18n";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      padding: spacing(5),
    },
    value: {
      paddingLeft: spacing(2),
    },
    key: {
      marginTop: spacing(2),
    },
  }),
);

const TextComp = TextTermMaker("NoMatch");

const NoMatch = memo(() => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.key}>
        <TextComp term={i18nHelper.noMatchTitle} />
      </Typography>
      <Typography className={classes.value}>
        <TextComp term={i18nHelper.noMatchT1} />
      </Typography>
      <Typography className={classes.value}>
        <TextComp term={i18nHelper.noMatchT2} />
      </Typography>
      <Typography className={classes.key} variant="h5">
        <TextComp term={i18nHelper.noMatchT3} />
      </Typography>
      <Typography className={classes.value}>
        <TextComp term={i18nHelper.noMatchT4} />
      </Typography>
      <Typography className={classes.value}>
        <TextComp term={i18nHelper.noMatchT5} />
      </Typography>
    </Paper>
  );
});

export default NoMatch;
