import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    container: {
      marginTop: spacing(10),
    },
    login: {
      padding: `${spacing(4)}px ${spacing(2)}px`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    textField: {
      width: "80%",
    },
  }),
);

export default useStyles;
