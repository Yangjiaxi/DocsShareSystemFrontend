import React, { memo, useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";

import Loading from "../../components/CircularProgress";
import ContentTitle from "../../components/ContentTitle";
import ContentFloors from "../../components/ContentFloors";

import { i18nHelper } from "../../i18n";

/*
  enter 
  -> get docID
  -> redux -> epic -> judge can open 
  -> no 
    -> error path (no such docID) -> 404
  -> yes -> render -> websocket start
*/

/*
Doc = {
  title,
  hintBar,

}
*/

const Doc = memo(
  ({
    changeBrowserPath,
    docID,
    viewDocs,
    acceptDoc,
    checkoutContent,
    cleanUp,
    isLoading,
  }) => {
    // if (docID) console.log(docID);
    // console.log(rest);

    useEffect(() => {
      changeBrowserPath(i18nHelper.DOC_PAGE);
    }, [changeBrowserPath]);

    useEffect(() => {
      viewDocs(true);
      return () => {
        viewDocs(false);
      };
    }, [viewDocs]);

    // 触发 accept   事件
    // 触发 checkOut 事件
    // 渲染元素
    // socket启动
    // -> socket 结束 & 更新最后使用日期

    useEffect(() => {
      acceptDoc(docID);
      checkoutContent(docID);
      return () => {
        cleanUp();
      };
    }, [docID, acceptDoc, checkoutContent, cleanUp]);

    if (isLoading) {
      return <Loading />;
    }

    return (
      <>
        <ContentTitle />
        <ContentFloors />
        {/* <FloorComments /> */}
      </>
    );
  },
);

export default Doc;
