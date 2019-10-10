import React, { memo, useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";

import { i18nHelper } from "../../i18n";

/*
  enter 
  -> get docID
  -> redux -> epic -> judge can open 
  -> no 
    -> error path (no such docID) -> 404
  -> yes -> render -> websocket start
*/

/*
Doc = {
  title,
  hintBar,

}
*/

const Doc = memo(({ changeBrowserPath, docID, viewDocs, acceptDoc }) => {
  // if (docID) console.log(docID);
  // console.log(rest);

  useEffect(() => {
    changeBrowserPath(i18nHelper.DOC_PAGE);
    viewDocs(true);
    return () => {
      viewDocs(false);
    };
  }, [changeBrowserPath, viewDocs]);

  useEffect(() => {
    acceptDoc(docID);
  }, [docID, acceptDoc]);

  return (
    <>
      <Paper>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
        <Typography variant="h1">Hello Doc!</Typography>
      </Paper>
    </>
  );
});

export default Doc;
