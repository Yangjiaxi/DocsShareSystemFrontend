import { createStyles, makeStyles } from "@material-ui/styles";

import amber from "@material-ui/core/colors/amber";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

export const warningColor = amber[700];
export const dangerColor = red[700];
export const successColor = green[600];
export const infoColor = blue[700];

const useStyles = makeStyles(({ breakpoints }) =>
  createStyles({
    success: { backgroundColor: successColor },
    error: { backgroundColor: dangerColor },
    warning: { backgroundColor: warningColor },
    info: { backgroundColor: infoColor },
    snackBar: {
      [breakpoints.down("xs")]: {
        width: "calc(100% - 16px)"
      }
    },
    shrink: {
      [breakpoints.down("xs")]: {
        width: "calc(100% - 112px)"
      }
    }
  })
);

export default useStyles;
