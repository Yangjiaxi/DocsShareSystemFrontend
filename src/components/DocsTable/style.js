import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    buttons: {
      margin: `${spacing(2)}px 0`,
    },
  }),
);

export default useStyles;
