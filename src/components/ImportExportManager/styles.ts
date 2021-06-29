import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useExportManagerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "fixed",
      bottom: 0,
      right: 0,
    },
    fabWrapper: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    fab: {
      marginLeft: theme.spacing(2),
    },
  })
);

export const useUploadStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      display: "none",
    },
    checkbox: {
      marginRight: 0,
    },
    editor: {
      flex: 1,
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    editorWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "auto",
      height: "100%",
      marginLeft: -theme.spacing(3),
      marginRight: -theme.spacing(3),
    },
    editorTabHeader: {
      padding: theme.spacing(1, 0, 1, 3),
      backgroundColor: "#fff", // "#202124",
      color: theme.palette.text.primary,
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  })
);
