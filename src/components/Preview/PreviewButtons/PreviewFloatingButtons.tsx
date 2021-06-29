import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

export default function PreviewFloatingButtons() {
  return (
    <Box>
      <Box mb={2}>
        <Typography variant="h6" color="textPrimary">
          Floating buttons
        </Typography>
      </Box>
      <Box mb={1}>
        <Box display="flex" flexWrap="wrap" mb={2}>
          <Box mr={2} mb={2}>
            <FloatingActionButtons />
          </Box>
        </Box>
        <Box display="flex" flexWrap="wrap" mb={2}>
          <Box mr={2} mb={2}>
            <FloatingActionButtonSize />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </div>
  );
}

function FloatingActionButtonSize() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.margin}
        >
          <AddIcon />
        </Fab>
        <Fab
          size="medium"
          color="secondary"
          aria-label="add"
          className={classes.margin}
        >
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div>
      <div>
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
      </div>
    </div>
  );
}
