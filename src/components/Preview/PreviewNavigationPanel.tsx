import { Box, Paper, Typography } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FolderIcon from "@material-ui/icons/Folder";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import RestoreIcon from "@material-ui/icons/Restore";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginLeft: -theme.spacing(4),
      marginRight: -theme.spacing(4),
      padding: theme.spacing(3, 0),
    },
    panel: {
      width: 200,
    },
  })
);

export default function PreviewNavigationPanel() {
  const classes = useStyles();

  return (
    <Box mb={4}>
      <Box mb={2}>
        <Typography variant="h5" color="textPrimary">
          Bottom Navigations
        </Typography>
      </Box>
      <Paper variant="outlined" style={{ overflow: "hidden" }}>
        <Box p={4} pt={0} pb={0}>
          <Box className={classes.wrapper} style={{ background: "#f8f8f8" }}>
            <SimpleBottomNavigation />
          </Box>
          <Box className={classes.wrapper} style={{ background: "#f8f8f8" }}>
            <LabelBottomNavigation />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}

function LabelBottomNavigation() {
  const [value, setValue] = React.useState("nearby");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
}
