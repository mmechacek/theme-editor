import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import PreviewForm from "./PreviewForm/PreviewForm";
import PreviewOptions from "./PreviewForm/PreviewOptions";
import PreviewSliders from "./PreviewForm/PreviewSliders";
import PreviewSwitch from "./PreviewForm/PreviewSwitch";
import PreviewBadges from "./PreviewForm/PreviewBadges";
import PreviewChips from "./PreviewForm/PreviewChips";

export default function PreviewFormWrap() {
  return (
    <Box mb={4}>
      <Box mb={2}>
        <Typography variant="h5" color="textPrimary">
          Form, Badges &amp; Chips
        </Typography>
      </Box>
      <Paper variant="outlined">
        <Box p={4}>
          <PreviewForm />
          <PreviewOptions />
          <PreviewSliders />
          <PreviewSwitch />
          <PreviewBadges />
          <PreviewChips />
        </Box>
      </Paper>
    </Box>
  );
}
