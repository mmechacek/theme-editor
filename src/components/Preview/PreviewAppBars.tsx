import React from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Paper,
} from "@material-ui/core";

export default function PreviewAppBars() {
  return (
    <Box mb={4}>
      <Box mb={2}>
        <Typography variant="h5" color="textPrimary">
          AppBar
        </Typography>
      </Box>
      <Paper variant="outlined">
        <Box p={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <AppBar color="primary" position="static">
                <Toolbar variant="dense">
                  <Typography variant="h6">Primary AppBar</Typography>
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item xs={12} md={3}>
              <AppBar color="secondary" position="static">
                <Toolbar variant="dense">
                  <Typography variant="h6">Secondary AppBar</Typography>
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item xs={12} md={3}>
              <AppBar color="default" position="static">
                <Toolbar variant="dense">
                  <Typography variant="h6">Default AppBar</Typography>
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item xs={12} md={3}>
              <AppBar variant="outlined" color="default" position="static">
                <Toolbar variant="dense">
                  <Typography variant="h6">Outlined AppBar</Typography>
                </Toolbar>
              </AppBar>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
