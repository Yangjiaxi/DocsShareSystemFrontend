import React, { memo, useEffect } from "react";

import { Typography } from "@material-ui/core";

import { i18nHelper } from "../../i18n";

const About = memo(({ changeBrowserPath }) => {
  useEffect(() => {
    changeBrowserPath(i18nHelper.ABOUT_PAGE);
  }, [changeBrowserPath]);
  return (
    <>
      <Typography>This is About Content</Typography>
    </>
  );
});

export default About;
