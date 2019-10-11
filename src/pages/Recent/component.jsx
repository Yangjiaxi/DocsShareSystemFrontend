import React, { memo, useEffect } from "react";

import DocsTable from "../../components/DocsTable";
import Loading from "../../components/CircularProgress";

import { i18nHelper } from "../../i18n";

const Recent = memo(
  ({ changeBrowserPath, getRecent, recentDocs, shouldUpdate }) => {
    useEffect(() => {
      changeBrowserPath(i18nHelper.RECENT_PAGE);
    }, [changeBrowserPath]);

    useEffect(() => {
      if (shouldUpdate) getRecent();
    }, [shouldUpdate, getRecent]);

    if (!recentDocs) {
      return <Loading />;
    }

    const docs = recentDocs || [];
    const sortedDocs = docs.sort(({ lastUse: a }, { lastUse: b }) => b - a);

    return (
      <>
        <DocsTable data={sortedDocs} />
      </>
    );
  },
);

export default Recent;
