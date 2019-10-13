import React, { memo } from "react";

import { Drawer, IconButton, Button, TextField, Grid } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import CommentBubble from "../CommentBubble";
import Loading from "../CircularProgress";

import { TextTermMaker, i18nHelper } from "../../i18n";

import useStyles from "./style";

const TextComp = TextTermMaker("FloorComments");

const FloorComments = memo(
  ({ contents, viewingFloor, toggleViewingDrawer, open, isMobile, myName }) => {
    const classes = useStyles();

    let render = <CommentBubble message="Bye bye~" side="left" />;
    if (open) {
      const { comments } = contents.filter(({ id }) => id === viewingFloor)[0];
      if (comments) {
        console.log(comments);
        render = (
          <>
            {comments.map(
              ({ content, time, username, voteDown, voteUp, _id }, index) => (
                <CommentBubble
                  id={_id}
                  comment={content}
                  time={time}
                  username={username}
                  voteDown={voteDown}
                  voteUp={voteUp}
                  isSelf={myName === username}
                  key={index}
                />
              ),
            )}
          </>
        );
      } else {
        render = <Loading />;
      }
    }

    const handleClose = () => {
      toggleViewingDrawer(null);
    };

    return (
      <Drawer
        open={open}
        onClose={handleClose}
        anchor="right"
        variant="temporary"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        {isMobile && (
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <Close />
          </IconButton>
        )}
        {render}
        <div className={classes.send}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField fullWidth variant="outlined" multiline />
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary">
                <TextComp term={i18nHelper.sendButton} />
              </Button>
            </Grid>
          </Grid>
        </div>
      </Drawer>
    );
  },
);

export default FloorComments;
