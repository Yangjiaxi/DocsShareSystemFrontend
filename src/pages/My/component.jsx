import React, { memo, useEffect } from "react";

import DocsTable from "../../components/DocsTable";

import { i18nHelper } from "../../i18n";

const My = memo(({ changeBrowserPath, getMy, myDocs, shouldUpdate }) => {
  useEffect(() => {
    changeBrowserPath(i18nHelper.MY_PAGE);
  }, [changeBrowserPath]);

  useEffect(() => {
    if (shouldUpdate) getMy();
  }, [shouldUpdate, getMy]);

  const docs = myDocs || [];
  const sortedDocs = docs.sort(({ lastUse: a }, { lastUse: b }) => b - a);

  return (
    <>
      <DocsTable data={sortedDocs} />
    </>
  );
});

export default My;
