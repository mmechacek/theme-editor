import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useItemColorStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      justifyContent: "flex-start",
      paddingLeft: theme.spacing(4),
      textTransform: "none",
      letterSpacing: 0,
      position: "relative",
    },
    color: {
      width: 20,
      marginRight: 10,
    },
    colorBadge: {
      display: "block",
      width: 20,
      height: 20,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
    },
    info: {},
    infoTitle: {
      marginRight: theme.spacing(1),
    },
    infoValue: {
      ...theme.typography.caption,
      color: theme.palette.text.hint,
    },
    buttonAutoWrapper: {
      position: "absolute",
      top: 5,
      right: theme.spacing(2),
    },
    buttonAuto: {
      color: theme.palette.text.secondary,

      "&:hover": {
        color: theme.palette.text.primary,
      },
    },
  })
);

export default useItemColorStyles;
