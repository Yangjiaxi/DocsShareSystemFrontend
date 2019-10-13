import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    msg: {
      padding: spacing(1, 2),
      borderRadius: spacing(2.5),
      marginBottom: spacing(2.5),
      display: "inline-block",
      wordBreak: "break-word",
    },
    leftRow: {
      textAlign: "left",
    },
    left: {
      borderRadius: spacing(2.5),
      backgroundColor: palette.grey[200],
    },
    rightRow: {
      textAlign: "right",
    },
    right: {
      borderRadius: spacing(2.5),
      color: palette.common.white,
    },
  }),
);

export default useStyles;
