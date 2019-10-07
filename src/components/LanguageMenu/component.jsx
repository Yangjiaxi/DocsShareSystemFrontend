import React, { memo, useState, useMemo } from "react";
import LanguageIcon from "@material-ui/icons/Language";

import {
  IconButton,
  Menu,
  Button,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import { languageList } from "../../i18n";

const languageMenu = memo(({ changeLanguage, languageName, keepWidth }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [anchorI18n, setAnchorI18n] = useState(null);

  const handleClick = callback => ({ currentTarget }) => {
    callback(currentTarget);
  };

  const handleClose = callback => () => {
    callback(null);
  };

  const handleChangeLanguage = name => {
    setAnchorI18n(null);
    changeLanguage(name);
  };
  const I18nComp = isMobile && !keepWidth ? IconButton : Button;
  const i18nButton = (
    <I18nComp color="inherit" onClick={handleClick(setAnchorI18n)}>
      <LanguageIcon />
      {(keepWidth || !isMobile) && (
        <Typography>{languageList[languageName].name}</Typography>
      )}
    </I18nComp>
  );

  const menuComponent = (
    <>
      <Menu
        anchorEl={anchorI18n}
        open={Boolean(anchorI18n)}
        onClose={handleClose(setAnchorI18n)}
      >
        {useMemo(
          () =>
            Object.keys(languageList).map((name, index) => (
              <MenuItem key={index} onClick={() => handleChangeLanguage(name)}>
                <Typography>{languageList[name].name}</Typography>
              </MenuItem>
            )),
          // eslint-disable-next-line
          []
        )}
      </Menu>
    </>
  );

  return (
    <>
      {useMemo(() => i18nButton, [i18nButton])}
      {menuComponent}
    </>
  );
});

export default languageMenu;
