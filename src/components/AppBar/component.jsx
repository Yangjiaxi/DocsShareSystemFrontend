import React, { memo, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Checked from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import LanguageIcon from "@material-ui/icons/Language";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Palette from "@material-ui/icons/Palette";
import PersonIcon from "@material-ui/icons/Person";
import RefreshIcon from "@material-ui/icons/Refresh";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import {
  Button,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Divider
} from "@material-ui/core";

import useStyles from "./style";

import { colorBook } from "../../utils/color";

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
    pageName
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
    // console.log(pageName);
    return (
      <>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar
            disableGutters
            classes={{
              gutters: classes.appBarGutters,
              regular: classes.regular
            }}
          >
            <Button color="inherit">
              <ArrowBack />
              <Typography>{getTermTextCurrent(i18nHelper.goBack)}</Typography>
            </Button>
            <Typography variant="h6" color="inherit" noWrap>
              {`  @ ${getTermTextCurrent(pageName)}`}
            </Typography>
            <div className={classes.rightButtons}>
              <Button color="inherit" onClick={handleClick(setAnchorI18n)}>
                <LanguageIcon />
                <Typography>{languageList[languageName].name}</Typography>
              </Button>
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
              {Object.keys(languageList).map((name, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handleChangeLanguage(name)}
                >
                  <Typography>{languageList[name].name}</Typography>
                </MenuItem>
              ))}
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
                    i18nHelper.changeTheme
                  )}${getTermTextCurrent(
                    themeMode === "light"
                      ? i18nHelper.darkMode
                      : i18nHelper.lightMode
                  )}`}
                </Typography>
              </MenuItem>
              <Divider />
              {colorBook.map(({ name, color: colorObj }, index) => (
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
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </>
    );
  }
);

export default Bar;
