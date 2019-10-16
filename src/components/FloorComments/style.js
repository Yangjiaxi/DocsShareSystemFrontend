import { createStyles, makeStyles } from "@material-ui/styles";

const drawerWidth = 350;

const useStyles = makeStyles(({ spacing, breakpoints, palette }) =>
  createStyles({
    drawerPaper: {
      whiteSpace: "nowrap",
      width: drawerWidth,
      [breakpoints.down("xs")]: {
        width: "100%",
      },
      display: "block",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      display: "block",
    },
    closeButton: {
      position: "absolute",
      right: spacing(1),
      top: spacing(1),
    },
    send: {
      position: "sticky",
      bottom: 0,
      width: "100%",
      padding: spacing(1),
      backgroundColor: palette.background.paper,
    },
  }),
);

export default useStyles;
