import React, { memo, useEffect } from "react";

import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
} from "@material-ui/core";

import { Create, History, Delete, Share, Info } from "@material-ui/icons";

import { getRandomString } from "../../utils";
import Anchor from "../Anchor";
import { i18nHelper, TextTermMaker } from "../../i18n";
import useStyles from "./style";

const itemList = [
  { type: "divider" },
  {
    type: "link",
    text: i18nHelper.recentDocs,
    icon: <History />,
    name: i18nHelper.RECENT_PAGE,
    to: "/",
  },
  {
    type: "link",
    text: i18nHelper.shareDocs,
    icon: <Share />,
    name: i18nHelper.SHARED_PAGE,
    to: "/shared",
  },
  {
    type: "link",
    text: i18nHelper.wasteBin,
    icon: <Delete />,
    name: i18nHelper.DELETED_PAGE,
    to: "trash",
  },
  { type: "divider" },
  {
    type: "link",
    text: i18nHelper.aboutSite,
    icon: <Info />,
    name: i18nHelper.ABOUT_PAGE,
    to: "/about",
  },
  { type: "divider" },
];

const TextComp = TextTermMaker("Slider");

const Slider = memo(
  ({
    open,
    toggleSlider,
    languageName,
    pageName,
    isMobile,
    isViewingDocs,
    pushUrl,
  }) => {
    const classes = useStyles();
    useEffect(() => {}, [languageName]);

    const handleCreate = () => {
      pushUrl(`/doc/${getRandomString(20)}`);
      toggleSlider();
    };

    const handleClick = () => {
      if (isMobile) toggleSlider();
    };

    const makeDrawerStyle = () => {
      const boot = { anchor: "left", variant: "permanent" };
      if (isMobile) {
        boot.variant = "temporary";
        boot.anchor = "bottom";
      } else if (isViewingDocs) {
        boot.variant = "temporary";
      }
      return boot;
    };

    return (
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        {...makeDrawerStyle()}
        open={open}
        onClose={toggleSlider}
      >
        <List>
          {!isMobile && !isViewingDocs && <div className={classes.toolbar} />}
          <Divider />
          <ListItem>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              size="large"
              onClick={handleCreate}
            >
              <Create />
              <Typography className={classes.createButton}>
                <TextComp term={i18nHelper.newDoc} />
              </Typography>
            </Button>
          </ListItem>
          {itemList.map(({ type, ...rest }, index) => {
            if (type === "divider") return <Divider key={index} />;
            const { text, icon, name, to } = rest;
            return (
              <Anchor to={to} key={index} component="div">
                <ListItem
                  button
                  selected={pageName === name}
                  onClick={handleClick}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>
                    <TextComp term={text} />
                  </ListItemText>
                </ListItem>
              </Anchor>
            );
          })}
        </List>
      </Drawer>
    );
  },
);

export default Slider;
