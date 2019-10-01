import React, { memo, useEffect } from "react";

import { Typography } from "@material-ui/core";

import { i18nHelper } from "../../i18n";

const Shared = memo(({ changeBrowserPath }) => {
  useEffect(() => {
    changeBrowserPath(i18nHelper.SHARED_PAGE);
  }, [changeBrowserPath]);
  return (
    <>
      <Typography>This is Shared Content</Typography>
    </>
  );
});

export default Shared;
