import { Box, Typography } from "@material-ui/core";
import React from "react";
import Chips from "./Chips/Chips";
import OutlinedChips from "./Chips/OutlinedChips";
import SmallChips from "./Chips/SmallChips";

export default function PreviewChips() {
  return (
    <Box mb={4}>
      <Box mb={2}>
        <Typography variant="h6" color="textPrimary">
          Chips
        </Typography>
      </Box>
      <Box mb={2}>
        <Chips />
      </Box>
      <Box mb={2}>
        <OutlinedChips />
      </Box>
      <Box>
        <SmallChips />
      </Box>
    </Box>
  );
}
