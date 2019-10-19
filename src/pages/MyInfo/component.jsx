import React, { memo, useEffect } from "react";

import Loading from "../../components/CircularProgress";

import { i18nHelper } from "../../i18n";

import InfoPanel from "../../components/InfoPanel";
import ChangePassword from "../../components/ChangePassword";

const MyInfo = memo(({ changeBrowserPath, getUserInfo, info }) => {
  useEffect(() => {
    changeBrowserPath(i18nHelper.INFO_PAGE);
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  if (!info) {
    return <Loading />;
  }
  return (
    <>
      <InfoPanel info={info} />
      <ChangePassword />
    </>
  );
});

export default MyInfo;
