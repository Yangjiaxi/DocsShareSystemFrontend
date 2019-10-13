import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    cell: {
      margin: `${spacing(2)}px auto`,
      padding: spacing(1),
    },
    divider: {
      margin: spacing(1),
    },
    markdown: {
      border: "1px solid red",
      display: "block",
      width: "100%",
      overflowX: "scroll",
    },
  }),
);

export default useStyles;
