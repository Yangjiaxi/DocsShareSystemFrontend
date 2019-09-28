import React, { memo, useState } from "react";
import { Redirect } from "react-router";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Container, Paper } from "@material-ui/core";
import Progress from "../Progress";

import { getTermText, i18nHelper } from "../../i18n";

import useStyles from "./style";

const getTermTextCurrent = term => getTermText("Login", term);

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
    <Container className={classes.container} maxWidth="xs">
      <Paper>
        <form className={classes.login}>
          <TextField
            label={getTermTextCurrent(i18nHelper.email)}
            className={classes.textField}
            value={email}
            autoComplete="email"
            onChange={handleEmail}
            margin="normal"
          />
          <TextField
            label={getTermTextCurrent(i18nHelper.password)}
            className={classes.textField}
            value={password}
            type="password"
            autoComplete="current-password"
            onChange={handlePassword}
            margin="normal"
          />
          <Button
            color="primary"
            size="large"
            onClick={handleLogin}
            disabled={!email || !password}
          >
            {getTermTextCurrent(i18nHelper.login)}
          </Button>
        </form>
        {isLoading && <Progress />}
      </Paper>
    </Container>
  );
});

export default Login;
