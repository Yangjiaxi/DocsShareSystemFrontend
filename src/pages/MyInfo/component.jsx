import React, { memo, useEffect } from "react";

import { Typography } from "@material-ui/core";

import Loading from "../../components/CircularProgress";
import { i18nHelper } from "../../i18n";

const MyInfo = memo(({ changeBrowserPath, getUserInfo, info }) => {
  useEffect(() => {
    changeBrowserPath(i18nHelper.INFO_PAGE);
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  if (!info) {
    return <Loading text="info" />;
  }
  return (
    <>
      <Typography>{JSON.stringify(info)}</Typography>
    </>
  );
});

export default MyInfo;
