import React, { memo, useState } from "react";
import Helmet from "react-helmet";

import { TextField, Button, Avatar, Grid, Typography } from "@material-ui/core";

import { ThumbUp } from "@material-ui/icons";

import Progress from "../../components/Progress";
import Anchor from "../../components/Anchor";

import { colorDict } from "../../utils/color";

import { i18nHelper, TextTermMaker } from "../../i18n";

import useStyles from "./style";

const TextComp = TextTermMaker("Login");

const Register = memo(
  ({ isLoading, register, enqueueSnackbar, themeColor, titleDict }) => {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
      if (username && username.trim().length < 6) {
        enqueueSnackbar(i18nHelper.BAD_USERNAME, {
          variant: "error",
        });
        return;
      }
      if (password && password.trim().length < 6) {
        enqueueSnackbar(i18nHelper.BAD_PASSWORD, {
          variant: "error",
        });
        return;
      }
      register(username, email, password);
    };

    const handleUsername = ({ target: { value } }) => {
      setUsername(value);
    };

    const handlePassword = ({ target: { value } }) => {
      setPassword(value);
    };

    const handleEmail = ({ target: { value } }) => {
      setEmail(value);
    };

    return (
      <>
        <Helmet>
          <meta
            name="theme-color"
            content={colorDict[themeColor][500]}
            data-react-helmet="true"
          />
          <title>{titleDict && titleDict[i18nHelper.REGISTER_PAGE]}</title>
        </Helmet>
        <Avatar className={classes.avatar}>
          <ThumbUp />
        </Avatar>
        <Typography variant="h6" gutterBottom>
          <TextComp term={i18nHelper.registerWord} />
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
                label={<TextComp term={i18nHelper.username} />}
                variant="outlined"
                fullWidth
                required
                value={username}
                autoComplete="username"
                onChange={handleUsername}
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
                onClick={handleRegister}
                disabled={!email || !password || !username}
              >
                <TextComp term={i18nHelper.register} />
              </Button>
            </Grid>
            <Grid item container justify="flex-end">
              <Anchor to="/login">
                <Typography color="primary">
                  <TextComp term={i18nHelper.login} />
                </Typography>
              </Anchor>
            </Grid>
          </Grid>
        </form>
        {isLoading && <Progress />}
      </>
    );
  },
);

export default Register;
