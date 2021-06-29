import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import PreviewBasicButtons from "./PreviewButtons/PreviewBasicButtons";
import PreviewFloatingButtons from "./PreviewButtons/PreviewFloatingButtons";

export default function PreviewButtons() {
  return (
    <Box mb={4}>
      <Box mb={2}>
        <Typography variant="h5" color="textPrimary">
          Buttons &amp; Badges
        </Typography>
      </Box>
      <Paper variant="outlined">
        <Box p={4}>
          <PreviewBasicButtons />
          <PreviewFloatingButtons />
        </Box>
      </Paper>
    </Box>
  );
}
