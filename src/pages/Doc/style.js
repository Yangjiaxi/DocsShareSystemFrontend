import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      paddingBottom: spacing(5),
    },
  }),
);

export default useStyles;
