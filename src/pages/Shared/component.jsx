import React, { memo, useEffect } from "react";

import DocsTable from "../../components/DocsTable";

import { i18nHelper } from "../../i18n";

const Shared = memo(
  ({ changeBrowserPath, getShared, sharedDocs, shouldUpdate }) => {
    useEffect(() => {
      changeBrowserPath(i18nHelper.SHARED_PAGE);
    }, [changeBrowserPath]);

    useEffect(() => {
      if (shouldUpdate) getShared();
    }, [shouldUpdate, getShared]);

    const docs = sharedDocs || [];
    const sortedDocs = docs.sort(({ lastUse: a }, { lastUse: b }) => b - a);

    return (
      <>
        <DocsTable data={sortedDocs} />
      </>
    );
  },
);

export default Shared;
