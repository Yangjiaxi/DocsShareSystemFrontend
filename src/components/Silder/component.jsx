import React, { memo, useEffect } from "react";

import {
  Drawer,
  useMediaQuery,
  useTheme,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
} from "@material-ui/core";

import { Create, History, Delete, Share, Info } from "@material-ui/icons";

import Anchor from "../Anchor";

import { i18nHelper, getTermText } from "../../i18n";

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

const getTermTextCurrent = term => getTermText("Slider", term);

const Slider = memo(({ open, toggleSlider, languageName, pageName }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {}, [languageName]);

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      variant={isMobile ? "temporary" : "permanent"}
      anchor={isMobile ? "bottom" : "left"}
      open={open}
      onClose={toggleSlider}
    >
      <List>
        {!isMobile && <div className={classes.toolbar} />}
        <Divider />
        <ListItem>
          <Button variant="outlined" color="primary" fullWidth size="large">
            <Create />
            <Typography className={classes.createButton}>
              {getTermTextCurrent(i18nHelper.newDoc)}
            </Typography>
          </Button>
        </ListItem>
        {itemList.map(({ type, ...rest }, index) => {
          if (type === "divider") return <Divider key={index} />;
          const { text, icon, name, to } = rest;
          return (
            <Anchor to={to} key={index} component="div">
              <ListItem button selected={pageName === name}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{getTermTextCurrent(text)}</ListItemText>
              </ListItem>
            </Anchor>
          );
        })}
      </List>
    </Drawer>
  );
});

export default Slider;
