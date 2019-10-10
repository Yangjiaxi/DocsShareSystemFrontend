import React, { memo, useEffect } from "react";

import DocsTable from "../../components/DocsTable";

import { i18nHelper } from "../../i18n";

const Recent = memo(
  ({ changeBrowserPath, getRecent, recentDocs, shouldUpdate }) => {
    useEffect(() => {
      changeBrowserPath(i18nHelper.RECENT_PAGE);
    }, [changeBrowserPath]);

    useEffect(() => {
      if (shouldUpdate) getRecent();
    }, [shouldUpdate, getRecent]);

    const docs = recentDocs || [];
    const sortedDocs = docs.sort(({ lastUse: a }, { lastUse: b }) => b - a);
    console.log("Sorted", sortedDocs);
    return (
      <>
        <DocsTable data={sortedDocs} />
      </>
    );
  },
);

export default Recent;
