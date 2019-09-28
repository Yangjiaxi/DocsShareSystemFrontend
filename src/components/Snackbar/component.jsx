import React, { memo } from "react";

import { SnackbarProvider } from "notistack";

import useStyles from "./style";

const Snackbar = memo(({ children }) => {
  const classes = useStyles();
  return (
    <SnackbarProvider
      maxSnack={5}
      classes={{
        variantSuccess: classes.success,
        variantError: classes.error,
        variantWarning: classes.warning,
        variantInfo: classes.info
      }}
      autoHideDuration={3000}
      className={classes.snackBar}
    >
      <>{children}</>
    </SnackbarProvider>
  );
});

export default Snackbar;
