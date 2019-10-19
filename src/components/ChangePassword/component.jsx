import React, { memo, useState } from "react";

import { Typography, Paper, TextField, Grid, Button } from "@material-ui/core";

import { Check } from "@material-ui/icons";

import { i18nHelper, TextTermMaker } from "../../i18n";

import useStyles from "./style";

const TextComp = TextTermMaker("MyInfo");

const ChangePassword = memo(({ enqueueSnackbar, changePassword }) => {
  const classes = useStyles();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNew, setConfirmNew] = useState("");

  const handleChange = cb => ({ target: { value } }) => {
    cb(value);
  };

  const handleChnagePassword = () => {
    if (
      oldPassword.trim().length < 6 ||
      newPassword.trim().length < 6 ||
      confirmNew.trim().length < 6
    ) {
      enqueueSnackbar(i18nHelper.BAD_PASSWORD, {
        variant: "error",
      });
      return;
    }
    if (newPassword.trim() !== confirmNew.trim()) {
      enqueueSnackbar(i18nHelper.passwordMustSame, {
        variant: "error",
      });
      return;
    }
    changePassword(oldPassword, newPassword);
  };

  return (
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5">
            <TextComp term={i18nHelper.changePasswordTitle} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">
            <TextComp term={i18nHelper.changePasswordHint} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={<TextComp term={i18nHelper.oldPassword} />}
            variant="outlined"
            fullWidth
            required
            value={oldPassword}
            autoComplete="password"
            onChange={handleChange(setOldPassword)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={<TextComp term={i18nHelper.newPassword} />}
            variant="outlined"
            fullWidth
            required
            value={newPassword}
            autoComplete="password"
            onChange={handleChange(setNewPassword)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={<TextComp term={i18nHelper.confirmNew} />}
            variant="outlined"
            fullWidth
            required
            value={confirmNew}
            autoComplete="password"
            onChange={handleChange(setConfirmNew)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleChnagePassword}
          >
            <Check />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
});

export default ChangePassword;
