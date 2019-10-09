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
  const docs = recentDocs || [];
  const sortedDocs = docs.sort(({ lastUse: a }, { lastUse: b }) => b - a);
  console.log("Sorted", sortedDocs);
  return (
    <>
      <DocsTable data={sortedDocs} />
    </>
  );
});

export default Recent;
