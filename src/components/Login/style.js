import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing, palette }) =>
  createStyles({
    container: {
      margin: `${spacing(10)}px auto`,
    },
    paper: {
      padding: spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: spacing(3),
    },
    avatar: {
      margin: spacing(1),
      backgroundColor: palette.secondary.main,
    },
    leftCorner: {
      position: "absolute",
      left: spacing(3),
      buttom: spacing(3),
    },
    rightCorner: {
      position: "absolute",
      right: spacing(3),
      buttom: spacing(3),
    },
  }),
);

export default useStyles;
