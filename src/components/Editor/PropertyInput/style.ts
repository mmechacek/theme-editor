import { makeStyles, Theme, createStyles } from "@material-ui/core";

const usePropertyInputStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      padding: theme.spacing(1, 4),
      width: "100%",
    },
    input: {},
    saveButton: {
      position: "absolute",
      top: theme.spacing(1),
      right: theme.spacing(4),
    },
  })
);

export default usePropertyInputStyle;
