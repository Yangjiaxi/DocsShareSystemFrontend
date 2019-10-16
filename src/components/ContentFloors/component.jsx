import React, { memo } from "react";

import { Fab, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import ContentCell from "../ContentCell";

const ContentFloors = memo(({ contents, isOwned, addFloor }) => {
  const handleAddFloor = () => {
    addFloor();
  };
  return (
    <>
      {contents.map(
        (
          { content, id, needFetch, needUpdate, time, commentsCount },
          index,
        ) => (
          <ContentCell
            key={index}
            content={content}
            id={id}
            needFetch={needFetch}
            needUpdate={needUpdate}
            time={time}
            commentsCount={commentsCount}
          />
        ),
      )}
      {isOwned && (
        <Grid container justify="center" alignItems="center">
          <Fab color="primary" onClick={handleAddFloor}>
            <Add />
          </Fab>
        </Grid>
      )}
    </>
  );
});

export default ContentFloors;
