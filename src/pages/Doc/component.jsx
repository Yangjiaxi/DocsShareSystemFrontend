import React, { memo, useEffect } from "react";

import { Container } from "@material-ui/core";
import Loading from "../../components/CircularProgress";
import ContentTitle from "../../components/ContentTitle";
import ContentFloors from "../../components/ContentFloors";
import FloorComments from "../../components/FloorComments";

import { i18nHelper } from "../../i18n";

import useStyles from "./style";

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
    toggleSlider,
    socketEnd,
  }) => {
    const classes = useStyles();

    useEffect(() => {
      changeBrowserPath(i18nHelper.DOC_PAGE);
      toggleSlider(false);
    }, [changeBrowserPath, toggleSlider]);

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
        socketEnd();
      };
    }, [docID, acceptDoc, checkoutContent, cleanUp, socketEnd]);

    if (isLoading) {
      return <Loading />;
    }

    return (
      <Container maxWidth="xl" className={classes.root}>
        <ContentTitle />
        <ContentFloors />
        <FloorComments />
      </Container>
    );
  },
);

export default Doc;
