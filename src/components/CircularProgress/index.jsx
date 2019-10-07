import React from "react";

import { CircularProgress, Typography, Paper } from "@material-ui/core";
import { i18nHelper, TextTermMaker } from "../../i18n";

const TextComp = TextTermMaker("CircularProgress");

const Progress = ({ text }) => {
  return (
    <Paper>
      <CircularProgress variant="determinate" />
      <Typography>
        <TextComp term={i18nHelper.loadingPrefix} />
        {text}
      </Typography>
    </Paper>
  );
};

export default Progress;
