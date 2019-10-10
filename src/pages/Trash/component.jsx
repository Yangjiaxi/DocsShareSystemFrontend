import React, { memo, useEffect } from "react";

import DocsTable from "../../components/DocsTable";

import { i18nHelper } from "../../i18n";

const Trash = memo(
  ({ changeBrowserPath, getTrash, trashDocs, shouldUpdate }) => {
    useEffect(() => {
      changeBrowserPath(i18nHelper.DELETED_PAGE);
    }, [changeBrowserPath]);

    useEffect(() => {
      if (shouldUpdate) getTrash();
    }, [shouldUpdate, getTrash]);

    const docs = trashDocs || [];
    const sortedDocs = docs.sort(({ lastUse: a }, { lastUse: b }) => b - a);
    console.log("TRash", sortedDocs);
    return (
      <>
        <DocsTable data={sortedDocs} isTrash />
      </>
    );
  },
);

export default Trash;
