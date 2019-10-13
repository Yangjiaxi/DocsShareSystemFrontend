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
    send: {
      width: "100%",
      position: "sticky",
      bottom: 0,
      padding: spacing(1),
      backgroundColor: palette.background.paper,
    },
  }),
);

export default useStyles;
