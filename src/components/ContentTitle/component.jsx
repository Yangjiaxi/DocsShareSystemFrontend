import React, { memo } from "react";

import { Typography } from "@material-ui/core";

const ContentTitle = memo(({ title }) => {
  return (
    <>
      <Typography variant="h3">{title}</Typography>
    </>
  );
});

export default ContentTitle;
