import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing, palette }) =>
  createStyles({
    cell: {
      margin: `${spacing(2)}px auto`,
      padding: spacing(1),
    },
    divider: {
      margin: spacing(1),
    },
    markdown: {
      padding: spacing(0, 2),
      display: "block",
      width: "100%",
      overflowX: "scroll",
    },
    input: {
      fontFamily: "monospace",
    },
    floorTextWrapper: {
      marginRight: "auto",
    },
    floorText: {
      fontSize: "1.75em",
      color: palette.grey[500],
    },
  }),
);

export default useStyles;
