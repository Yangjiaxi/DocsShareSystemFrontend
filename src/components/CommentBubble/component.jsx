import React, { memo } from "react";

import "moment/min/locales";
import moment from "moment";

import { Typography, Grid, Chip, Divider } from "@material-ui/core";

import { ThumbUpOutlined, ThumbDownOutlined, Person } from "@material-ui/icons";

import useStyles from "./style";

const CommentBubble = memo(
  ({ comment, time, username, voteDown, voteUp, isSelf, languageName, id }) => {
    const classes = useStyles();

    moment.locale(languageName);

    console.log(voteDown, voteUp);

    const handleVoteUp = () => {
      console.log("Up", id);
    };

    const handleVoteDown = () => {
      console.log("Down", id);
    };

    const voteUpComp = (
      <>
        <ThumbUpOutlined fontSize="small" />
        {voteUp}
      </>
    );

    const voteDownComp = (
      <>
        <ThumbDownOutlined fontSize="small" />
        {voteDown}
      </>
    );

    return (
      <>
        <Grid
          container
          justify="flex-start"
          spacing={1}
          className={classes.root}
        >
          {username && (
            <Grid item xs={12}>
              <Typography color="primary" display="inline">
                {username}
              </Typography>
              {isSelf && (
                <Chip
                  variant="outlined"
                  size="small"
                  label={<Person fontSize="small" />}
                />
              )}
            </Grid>
          )}
          <Grid item xs={8}>
            <Typography align="left" className={classes.msg}>
              {comment}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {time && (
              <Typography variant="caption">
                {moment(time).fromNow()}
              </Typography>
            )}
            {voteUp !== undefined && voteDown !== undefined && (
              <>
                <Chip
                  variant="outlined"
                  size="small"
                  onClick={handleVoteUp}
                  label={voteUpComp}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  onClick={handleVoteDown}
                  label={voteDownComp}
                />
              </>
            )}
          </Grid>
        </Grid>
        <Divider />
      </>
    );
  },
);

export default CommentBubble;
