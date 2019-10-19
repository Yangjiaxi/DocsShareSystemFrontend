import React, { memo, Fragment } from "react";

import { Typography, Paper } from "@material-ui/core";

import { i18nHelper, TextTermMaker } from "../../i18n";

import useStyles from "./style";

const TextComp = TextTermMaker("MyInfo");

const InfoPanel = memo(({ info }) => {
  const classes = useStyles();

  const { _id: id, username, email, time } = info;

  const term = (key, value) => (
    <>
      <Typography variant="h5" className={classes.key}>
        {key}
      </Typography>
      <Typography className={classes.value}>{value}</Typography>
    </>
  );

  const list = [
    {
      key: <TextComp term={i18nHelper.infoUsername} />,
      value: username,
    },

    {
      key: <TextComp term={i18nHelper.infoEmail} />,
      value: email,
    },
    {
      key: <TextComp term={i18nHelper.infoTime} />,
      value: time,
    },
    {
      key: <TextComp term={i18nHelper.infoID} />,
      value: id,
    },
  ];

  return (
    <Paper className={classes.root}>
      {list.map(({ key, value }, index) => (
        <Fragment key={index}>{term(key, value)}</Fragment>
      ))}
    </Paper>
  );
});

export default InfoPanel;
