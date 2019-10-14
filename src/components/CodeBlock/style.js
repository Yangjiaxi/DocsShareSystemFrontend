import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    code: {
      margin: spacing(2),
      padding: spacing(1),
      overflowX: "auto",
    },
  }),
);

export default useStyles;
