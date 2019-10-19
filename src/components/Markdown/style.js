import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing, palette }) =>
  createStyles({
    result: {
      fontSize: "1.2em",
      overflowX: "auto",
      padding: spacing(1),
    },
    block: {
      overflowX: "auto",
      border: `1px solid ${palette.grey[500]}`,
      borderRadius: spacing(0.5),
    },
    image: {
      display: "block",
      maxWidth: "75%",
      margin: "0 auto",
    },
  }),
);

export default useStyles;
