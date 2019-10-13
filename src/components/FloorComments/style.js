import { createStyles, makeStyles } from "@material-ui/styles";

const drawerWidth = 350;

const useStyles = makeStyles(({ spacing, breakpoints }) =>
  createStyles({
    drawerPaper: {
      whiteSpace: "nowrap",
      width: drawerWidth,
      [breakpoints.down("xs")]: {
        width: "100%",
      },
      padding: spacing(2),
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    closeButton: {
      position: "absolute",
      right: spacing(1),
      top: spacing(1),
    },
  }),
);

export default useStyles;
