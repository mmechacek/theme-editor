import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const usePropertyStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonRoot: {
      width: "100%",
      letterSpacing: 0,
      textTransform: "none",
      justifyContent: "flex-start",
      color: theme.palette.text.primary,
    },
    buttonLabel: {
      padding: "6px 8px",
      display: "inherit",
      alignItems: "inherit",
      justifyContent: "inherit",
    },
    item: {
      display: "block",
      padding: 0,
    },
  })
);
