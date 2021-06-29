import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { useNavBarStyles } from "./styles";

interface Props {
  onToggleMenu: () => void;
}

export default function NavBar(props: Props) {
  const classes = useNavBarStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.onToggleMenu}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Theme editor
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
