import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing, breakpoints }) =>
  createStyles({
    root: {
      display: "flex"
    },
    content: {
      marginTop: spacing(10),
      [breakpoints.down("xs")]: {
        marginTop: spacing(8)
      }
    }
  })
);

export default useStyles;
