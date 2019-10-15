import React, { memo, useState } from "react";

import { Typography, TextField } from "@material-ui/core";

import { i18nHelper, TextTermMaker } from "../../i18n";

import useStyle from "./style";

const TextComp = TextTermMaker("ContentTitle");

const ContentTitle = memo(({ title, isOwned, changeTitle }) => {
  if (!isOwned) {
    return (
      <Typography variant="h5" align="center">
        {title}
      </Typography>
    );
  }
  const [current, setCurrent] = useState(title);
  const handleChange = ({ target: { value } }) => {
    setCurrent(value);
    changeTitle(value);
  };
  const classes = useStyle();
  return (
    <>
      <TextField
        variant="outlined"
        label={<TextComp term={i18nHelper.contentTitle} />}
        fullWidth
        value={current}
        onChange={handleChange}
        InputProps={{
          classes: {
            input: classes.input,
          },
        }}
      />
    </>
  );
});

export default ContentTitle;
