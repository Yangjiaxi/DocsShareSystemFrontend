import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    cell: {
      margin: `${spacing(2)}px auto`,
      padding: spacing(1),
    },
  }),
);

export default useStyles;
