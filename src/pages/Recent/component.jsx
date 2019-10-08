import React, { memo, useEffect } from "react";

import DocsTable from "../../components/DocsTable";

import { i18nHelper } from "../../i18n";

const Recent = memo(({ changeBrowserPath, getRecent, recentDocs }) => {
  useEffect(() => {
    changeBrowserPath(i18nHelper.RECENT_PAGE);
    getRecent();
    // eslint-disable-next-line
  }, [changeBrowserPath]);
  // console.log(recentDocs);
  const sortedDocs = recentDocs.sort(({ lastUse: a }, { lastUse: b }) => b - a);
  return (
    <>
      <DocsTable data={sortedDocs} />
    </>
  );
});

export default Recent;
