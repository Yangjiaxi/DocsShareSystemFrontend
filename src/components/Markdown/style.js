import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    result: {
      fontSize: "1.2em",
      overflowX: "auto",
      padding: spacing(1),
    },
  }),
);

export default useStyles;
