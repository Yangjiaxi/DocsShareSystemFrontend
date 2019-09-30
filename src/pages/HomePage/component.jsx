import React, { memo, useEffect } from "react";
import { Paper } from "@material-ui/core";

import { i18nHelper } from "../../i18n";

const HomePage = memo(({ changeBrowserPath }) => {
  useEffect(() => {
    changeBrowserPath(i18nHelper.HOME_PAGE);
  }, [changeBrowserPath]);
  return (
    <>
      <Paper>Hello Dashboard!</Paper>
    </>
  );
});

export default HomePage;
