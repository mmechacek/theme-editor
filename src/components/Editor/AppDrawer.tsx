import { Drawer, Hidden, useTheme } from "@material-ui/core";
import React from "react";
import { useAppDrawerStyles } from "./styles";
import EditForm from "./EditForm";

interface Props {
  mobileOpen: boolean;
  onToggleMenu: () => void;
}

export default function AppDrawer(props: Props) {
  const classes = useAppDrawerStyles();
  const theme = useTheme();

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={props.onToggleMenu}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <EditForm />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <EditForm />
        </Drawer>
      </Hidden>
    </nav>
  );
}
