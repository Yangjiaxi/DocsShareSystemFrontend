import React, { memo, useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";

import { i18nHelper } from "../../i18n";

/*
  enter 
  -> get docID
  -> redux -> epic -> judge can open 
  -> no 
    -> error path (no such docID) -> 404
    -> shouldEnterPassword -> redux -> epic -> judge can open 
  -> yes -> render -> websocket start
*/

const Doc = memo(({ changeBrowserPath, docID, viewDocs }) => {
  // if (docID) console.log(docID);
  // console.log(rest);

  useEffect(() => {
    changeBrowserPath(i18nHelper.DOC_PAGE);
    viewDocs(true);
    return () => {
      viewDocs(false);
    };
  }, [changeBrowserPath, viewDocs]);

  return (
    <>
      <Paper>
        <Typography>{`Hello Doc!${docID}`}</Typography>
      </Paper>
    </>
  );
});

export default Doc;
