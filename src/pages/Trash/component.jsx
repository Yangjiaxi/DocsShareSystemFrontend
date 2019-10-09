import React, { memo, useEffect } from "react";

import DocsTable from "../../components/DocsTable";

import { i18nHelper } from "../../i18n";

const Trash = memo(({ changeBrowserPath, getTrash, trashDocs }) => {
  useEffect(() => {
    changeBrowserPath(i18nHelper.DELETED_PAGE);
    getTrash();
    // eslint-disable-next-line
  }, [changeBrowserPath]);
  const docs = trashDocs || [];
  const sortedDocs = docs.sort(({ lastUse: a }, { lastUse: b }) => b - a);
  console.log("TRash", sortedDocs);
  return (
    <>
      <DocsTable data={sortedDocs} isTrash />
    </>
  );
});

export default Trash;
