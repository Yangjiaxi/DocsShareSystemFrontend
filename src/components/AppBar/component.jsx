import React, { memo, useState, useMemo } from "react";

import Helmet from "react-helmet";

import MenuIcon from "@material-ui/icons/Menu";
import Checked from "@material-ui/icons/Check";
import LanguageIcon from "@material-ui/icons/Language";
import Palette from "@material-ui/icons/Palette";
import PersonIcon from "@material-ui/icons/Person";
import RefreshIcon from "@material-ui/icons/Refresh";

import {
  AppBar,
  IconButton,
  Menu,
  Button,
  MenuItem,
  Toolbar,
  ListItemAvatar,
  Typography,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from "@material-ui/core";

import useStyles from "./style";

import { colorBook, colorDict } from "../../utils/color";

import { getTermText, languageList, i18nHelper } from "../../i18n";

const getTermTextCurrent = term => getTermText("AppBar", term);

const Bar = memo(
  ({
    logout,
    changeLanguage,
    languageName,
    themeMode,
    changeThemeMode,
    changeThemeColor,
    themeColor,
    pageName,
    isMobile,
    isViewingDocs,
    toggleSlider,
  }) => {
    const classes = useStyles();

    const [anchorLogout, setAnchorLogout] = useState(null);
    const [anchorTheme, setAnchorTheme] = useState(null);
    const [anchorI18n, setAnchorI18n] = useState(null);

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

    const handleChangeLanguage = name => {
      setAnchorI18n(null);
      changeLanguage(name);
    };

    const handleChangeThemeMode = () => {
      setAnchorTheme(null);
      changeThemeMode();
    };

    const handleChangeColor = colorName => {
      setAnchorTheme(null);
      changeThemeColor(colorName);
    };

    const refresh = () => {
      window.sessionStorage.clear();
      window.location.reload();
    };

    const pageTitle = getTermTextCurrent(pageName);

    const I18nComp = isMobile ? IconButton : Button;
    const i18nButton = (
      <I18nComp color="inherit" onClick={handleClick(setAnchorI18n)}>
        <LanguageIcon />
        {!isMobile && (
          <Typography>{languageList[languageName].name}</Typography>
        )}
      </I18nComp>
    );

    return (
      <>
        <Helmet>
          <meta
            name="theme-color"
            content={colorDict[themeColor][500]}
            data-react-helmet="true"
          />
          <title>{pageTitle}</title>
        </Helmet>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters={!isMobile && isViewingDocs}>
            {isViewingDocs && !isMobile && (
              <IconButton color="inherit" onClick={toggleSlider}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" color="inherit" noWrap>
              {pageTitle}
            </Typography>
            <div className={classes.rightButtons}>
              {i18nButton}
              <IconButton color="inherit" onClick={handleClick(setAnchorTheme)}>
                <Palette />
              </IconButton>
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
              {getTermTextCurrent(i18nHelper.logout)}
            </MenuItem>
          </Menu>

          <Menu
            anchorEl={anchorI18n}
            open={Boolean(anchorI18n)}
            onClose={handleClose(setAnchorI18n)}
          >
            {useMemo(
              () =>
                Object.keys(languageList).map((name, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => handleChangeLanguage(name)}
                  >
                    <Typography>{languageList[name].name}</Typography>
                  </MenuItem>
                )),
              // eslint-disable-next-line
              []
            )}
          </Menu>
          <Menu
            anchorEl={anchorTheme}
            open={Boolean(anchorTheme)}
            onClose={handleClose(setAnchorTheme)}
            PaperProps={{ style: { maxHeight: 330 } }}
          >
            <MenuItem onClick={() => handleChangeThemeMode()}>
              <Typography>
                {`${getTermTextCurrent(
                  i18nHelper.changeTheme,
                )}${getTermTextCurrent(
                  themeMode === "light"
                    ? i18nHelper.darkMode
                    : i18nHelper.lightMode,
                )}`}
              </Typography>
            </MenuItem>
            <Divider />
            {useMemo(
              () =>
                colorBook.map(({ name, color: colorObj }, index) => (
                  <MenuItem
                    button
                    key={index}
                    onClick={() => handleChangeColor(name)}
                  >
                    <ListItemAvatar className={classes.icon}>
                      <Avatar style={{ backgroundColor: colorObj[500] }} />
                    </ListItemAvatar>
                    <ListItemText>
                      <Typography style={{ color: colorObj[500] }}>
                        {name.toUpperCase()}
                      </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction>
                      {themeColor === name && <Checked />}
                    </ListItemSecondaryAction>
                  </MenuItem>
                )),
              // eslint-disable-next-line
              [languageName, themeColor, themeMode]
            )}
          </Menu>
        </AppBar>
      </>
    );
  },
);

export default Bar;
