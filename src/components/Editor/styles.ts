import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { drawerWidth } from "../../config";

export const useEditorStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

export const useAppDrawerStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
  })
);
