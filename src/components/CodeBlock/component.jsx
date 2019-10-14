import React, { memo } from "react";
import { Paper, Chip } from "@material-ui/core";

import useStyles from "./style";

const CodePreview = memo(({ language, value }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.code} elevation={2}>
      {language && <Chip label={language} size="small" variant="outlined" />}
      <pre>{value}</pre>
    </Paper>
  );
});

export default CodePreview;
