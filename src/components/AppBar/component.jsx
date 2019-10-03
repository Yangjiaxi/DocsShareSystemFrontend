import React, { memo, useState } from "react";

import Helmet from "react-helmet";

import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import RefreshIcon from "@material-ui/icons/Refresh";

import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

import LanguageMenu from "../LanguageMenu";
import ThemeMenu from "../ThemeMenu";

import { colorDict } from "../../utils/color";
import { i18nHelper, TextTermMaker, getTermText } from "../../i18n";

import useStyles from "./style";

const TextComp = TextTermMaker("AppBar");

const Bar = memo(
  ({ logout, themeColor, pageName, isMobile, isViewingDocs, toggleSlider }) => {
    const classes = useStyles();

    const [anchorLogout, setAnchorLogout] = useState(null);

    const handleClick = callback => ({ currentTarget }) => {
      callback(currentTarget);
    };

    const handleClose = callback => () => {
      callback(null);
    };

    const handleLogout = () => {
      setAnchorLogout(null);
      logout();
    };

    const refresh = () => {
      window.sessionStorage.clear();
      window.location.reload();
    };

    return (
      <>
        <Helmet>
          <meta
            name="theme-color"
            content={colorDict[themeColor][500]}
            data-react-helmet="true"
          />
          <title>{getTermText("AppBar", pageName)}</title>
        </Helmet>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters={!isMobile && isViewingDocs}>
            {isViewingDocs && !isMobile && (
              <IconButton color="inherit" onClick={toggleSlider}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" color="inherit" noWrap>
              <TextComp term={pageName} />
            </Typography>
            <div className={classes.rightButtons}>
              <LanguageMenu />
              <ThemeMenu />
              <IconButton color="inherit" onClick={refresh}>
                <RefreshIcon />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={handleClick(setAnchorLogout)}
              >
                <PersonIcon />
              </IconButton>
            </div>
          </Toolbar>
          <Menu
            anchorEl={anchorLogout}
            open={Boolean(anchorLogout)}
            onClose={handleClose(setAnchorLogout)}
          >
            <MenuItem onClick={handleLogout}>
              <TextComp term={i18nHelper.logout} />
            </MenuItem>
          </Menu>
        </AppBar>
      </>
    );
  },
);

export default Bar;
