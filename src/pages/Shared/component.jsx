import React, { memo, useEffect } from "react";

import DocsTable from "../../components/DocsTable";

import { i18nHelper } from "../../i18n";

const Shared = memo(({ changeBrowserPath, getShared, sharedDocs }) => {
  useEffect(() => {
    changeBrowserPath(i18nHelper.SHARED_PAGE);
    getShared();
    // eslint-disable-next-line
  }, [changeBrowserPath]);
  const docs = sharedDocs || [];
  const sortedDocs = docs.sort(({ lastUse: a }, { lastUse: b }) => b - a);
  console.log("Sorted", sortedDocs);
  return (
    <>
      <DocsTable data={sortedDocs} />
    </>
  );
});

export default Shared;
