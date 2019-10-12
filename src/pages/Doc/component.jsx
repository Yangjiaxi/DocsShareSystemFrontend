import React, { memo, useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";

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
  ({ changeBrowserPath, docID, viewDocs, acceptDoc, checkoutContent }) => {
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
    useEffect(() => {}, []);

    useEffect(() => {
      acceptDoc(docID);
      // checkoutContent(docID);
    }, [docID, acceptDoc, checkoutContent]);

    return (
      <>
        <Paper>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
          <Typography variant="h1">Hello Doc!</Typography>
        </Paper>
      </>
    );
  },
);

export default Doc;
