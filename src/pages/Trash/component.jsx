import React, { memo, useEffect } from "react";

import { Typography } from "@material-ui/core";

import { i18nHelper } from "../../i18n";

const Trash = memo(({ changeBrowserPath }) => {
  useEffect(() => {
    changeBrowserPath(i18nHelper.DELETED_PAGE);
  }, [changeBrowserPath]);
  return (
    <>
      <Typography>This is Trash Content</Typography>
    </>
  );
});

export default Trash;
