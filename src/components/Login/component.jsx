import React, { memo, useState } from "react";
import { Redirect } from "react-router";

import {
  TextField,
  Button,
  Container,
  Paper,
  Avatar,
  Grid,
  Typography,
} from "@material-ui/core";

import { Lock } from "@material-ui/icons";

import Progress from "../Progress";
import ThemeMenu from "../ThemeMenu";
import LanguageMenu from "../LanguageMenu";

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

  const handleRegister = () => {
    // login(email, password);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  return (
    <>
      <Container className={classes.container} maxWidth="xs">
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Lock />
          </Avatar>
          <Typography variant="h6" gutterBottom>
            <TextComp term={i18nHelper.loginWord} />
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={4}>
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
              <Grid item sm={4} xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  color="secondary"
                  size="large"
                  onClick={handleRegister}
                >
                  <TextComp term={i18nHelper.register} />
                </Button>
              </Grid>
              <Grid item sm={8} xs={12}>
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
            </Grid>
          </form>
          {isLoading && <Progress />}
        </Paper>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <LanguageMenu />
          <ThemeMenu />
        </Grid>
      </Container>
    </>
  );
});

export default Login;
