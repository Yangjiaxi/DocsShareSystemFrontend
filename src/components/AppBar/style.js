import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ zIndex, spacing, breakpoints }) =>
  createStyles({
    appBar: {
      zIndex: zIndex.drawer + 1,
    },
    appBarGutters: {
      paddingRight: 0,
    },
    regular: {
      minHeight: spacing(8),
      [breakpoints.down("xs")]: {
        minHeight: spacing(6),
      },
    },
    rightButtons: {
      marginLeft: "auto",
      display: "flex",
      "& button": {
        [breakpoints.down("xs")]: {
          padding: spacing(1),
        },
      },
    },
  }),
);

export default useStyles;
