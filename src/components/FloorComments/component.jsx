import React, { memo } from "react";

import { Drawer, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import CommentBubble from "../CommentBubble";
import Loading from "../CircularProgress";

import useStyles from "./style";

const FloorComments = memo(
  ({
    contents,
    viewingFloor,
    toggleViewingDrawer,
    commentDrawerOpen,
    isMobile,
  }) => {
    const classes = useStyles();

    if (!commentDrawerOpen) {
      return;
    }
    const { comments } = contents.filter(({ id }) => id === viewingFloor)[0];

    const handleClose = () => {
      toggleViewingDrawer(null);
    };

    return (
      <Drawer
        open={commentDrawerOpen}
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
        {comments ? (
          <>
            {comments.map(({ content }, index) => (
              <CommentBubble message={content} side="left" key={index} />
            ))}
          </>
        ) : (
            <Loading />
          )}
      </Drawer>
    );
  },
);

export default FloorComments;
