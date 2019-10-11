import React, { memo, useEffect } from "react";

import DocsTable from "../../components/DocsTable";
import Loading from "../../components/CircularProgress";

import { i18nHelper } from "../../i18n";

const Trash = memo(
  ({ changeBrowserPath, getTrash, trashDocs, shouldUpdate }) => {
    useEffect(() => {
      changeBrowserPath(i18nHelper.DELETED_PAGE);
    }, [changeBrowserPath]);

    useEffect(() => {
      if (shouldUpdate) getTrash();
    }, [shouldUpdate, getTrash]);

    if (!trashDocs) {
      return <Loading />;
    }

    const docs = trashDocs || [];
    const sortedDocs = docs.sort(({ lastUse: a }, { lastUse: b }) => b - a);

    return (
      <>
        <DocsTable data={sortedDocs} isTrash />
      </>
    );
  },
);

export default Trash;
