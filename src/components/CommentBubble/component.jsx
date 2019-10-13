import React, { memo } from "react";

import { Typography, Grid } from "@material-ui/core";

import useStyles from "./style";

const CommentBubble = memo(({ message, side }) => {
  const classes = useStyles();
  console.log(message);
  return (
    <Grid
      container
      spacing={2}
      justify={side === "right" ? "flex-end" : "flex-start"}
    >
      <Grid item xs={8}>
        <div className={classes[`${side}Row`]}>
          <Typography
            align="left"
            className={`${classes.msg} ${classes[side]}`}
          >
            {message}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
});

export default CommentBubble;
