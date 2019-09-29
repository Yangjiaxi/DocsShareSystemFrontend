import React, { memo, useEffect } from "react";
import { Paper } from "@material-ui/core";

import { pageNames } from "../pageNames";

const HomePage = memo(({ changeBrowserPath }) => {
  useEffect(() => {
    changeBrowserPath(pageNames.HOME_PAGE);
  }, [changeBrowserPath]);
  return (
    <>
      <Paper>Hello Dashboard!</Paper>
    </>
  );
});

export default HomePage;
