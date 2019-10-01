import React, { memo, useEffect } from "react";

import { Typography } from "@material-ui/core";

import { i18nHelper } from "../../i18n";

const Recent = memo(({ changeBrowserPath }) => {
  useEffect(() => {
    changeBrowserPath(i18nHelper.RECENT_PAGE);
  }, [changeBrowserPath]);
  return (
    <>
      <Typography>This is Recent Content</Typography>
    </>
  );
});

export default Recent;
