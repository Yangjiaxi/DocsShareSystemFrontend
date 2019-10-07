import React, { memo, useState } from "react";
import { Redirect } from "react-router";

import { TextField, Button, Avatar, Grid, Typography } from "@material-ui/core";

import { Lock } from "@material-ui/icons";

import Progress from "../../components/Progress";
import Anchor from "../../components/Anchor";

import { i18nHelper, TextTermMaker } from "../../i18n";

import useStyles from "./style";

const TextComp = TextTermMaker("Login");

const Login = memo(({ loggedIn, login, isLoading }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (loggedIn) {
    return <Redirect to="/" />;
  }
  const handleLogin = () => {
    login(email, password);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  return (
    <>
      <Avatar className={classes.avatar}>
        <Lock />
      </Avatar>
      <Typography variant="h6" gutterBottom>
        <TextComp term={i18nHelper.loginWord} />
      </Typography>
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={<TextComp term={i18nHelper.email} />}
              variant="outlined"
              fullWidth
              required
              value={email}
              autoComplete="email"
              onChange={handleEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={<TextComp term={i18nHelper.password} />}
              variant="outlined"
              fullWidth
              required
              value={password}
              type="password"
              autoComplete="current-password"
              onChange={handlePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              size="large"
              onClick={handleLogin}
              disabled={!email || !password}
            >
              <TextComp term={i18nHelper.login} />
            </Button>
          </Grid>
          <Grid item container justify="flex-end">
            <Anchor to="/register">
              <Typography color="primary">
                <TextComp term={i18nHelper.register} />
              </Typography>
            </Anchor>
          </Grid>
        </Grid>
      </form>
      {isLoading && <Progress />}
    </>
  );
});

export default Login;
