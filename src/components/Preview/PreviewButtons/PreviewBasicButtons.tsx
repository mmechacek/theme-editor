import { Box, Button, ButtonGroup, Typography } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import React from "react";

export default function PreviewBasicButtons() {
  return (
    <Box>
      <Box mb={2}>
        <Typography variant="h6" color="textPrimary">
          Buttons
        </Typography>
      </Box>
      <Box mb={2}>
        <Box display="flex" flexWrap="wrap">
          <Box mr={1} mb={1}>
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </Box>
          <Box mr={1} mb={1}>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
          </Box>
          <Box mr={1} mb={1}>
            <Button variant="contained" color="default">
              Default
            </Button>
          </Box>
          <Box mr={1} mb={1}>
            <Button variant="contained" color="secondary" disabled>
              Disabled
            </Button>
          </Box>
          <Box mr={1} mb={1}>
            <Button
              variant="contained"
              startIcon={<VisibilityIcon />}
              color="primary"
              disableElevation
            >
              Disabled elevation
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mb={2}>
        <Typography variant="h6" color="textPrimary">
          Outlined Buttons
        </Typography>
      </Box>
      <Box mb={2} display="flex" flexWrap="wrap">
        <Box mr={1} mb={1}>
          <Button variant="outlined">Default</Button>
        </Box>
        <Box mr={1} mb={1}>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
        </Box>
        <Box mr={1} mb={1}>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
        </Box>
        <Box mr={1} mb={1}>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
        </Box>
        <Box mr={1} mb={1}>
          <Button variant="outlined" href="#text-buttons" color="primary">
            Link
          </Button>
        </Box>
      </Box>
      <Box mb={2}>
        <Typography variant="h6" color="textPrimary">
          Text Buttons
        </Typography>
      </Box>
      <Box mb={2} display="flex" flexWrap="wrap">
        <Box mr={1} mb={1}>
          <Button>Default</Button>
        </Box>
        <Box mr={1} mb={1}>
          <Button color="primary">Primary</Button>
        </Box>
        <Box mr={1} mb={1}>
          <Button color="secondary">Secondary</Button>
        </Box>
        <Box mr={1} mb={1}>
          <Button disabled>Disabled</Button>
        </Box>
        <Box mr={1} mb={1}>
          <Button href="#text-buttons" color="primary">
            Link
          </Button>
        </Box>
      </Box>
      <Box mb={2}>
        <Typography variant="h6" color="textPrimary">
          Floating buttons
        </Typography>
      </Box>
      <Box mb={2}>
        <Box display="flex" flexWrap="wrap">
          <Box mr={1} mb={1}>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Box>
          <Box mr={1} mb={1}>
            <ButtonGroup
              variant="contained"
              color="secondary"
              aria-label="contained secondary button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Box>
          <Box mr={1} mb={1}>
            <ButtonGroup
              variant="text"
              color="default"
              aria-label="text default button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
