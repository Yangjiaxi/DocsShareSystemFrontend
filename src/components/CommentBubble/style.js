import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      margin: spacing(0, 2, 2),
    },
    msg: {
      padding: spacing(1, 2),
      whiteSpace: "pre-wrap",
    },
  }),
);

export default useStyles;
