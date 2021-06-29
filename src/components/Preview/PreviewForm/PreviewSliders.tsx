import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Slider,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 200,
    },
    root2: {
      width: 200,
      maxWidth: "100%",
    },
  })
);

export default function PreviewSliders() {
  return (
    <Box mb={4}>
      <Box mb={2}>
        <Typography variant="h6" color="textPrimary">
          Sliders
        </Typography>
      </Box>
      <Box mb={1}>
        <Box display="flex" flexWrap="wrap">
          <Box mr={2} mb={2}>
            <ContinuousSlider />
          </Box>
          <Box mr={2} mb={2}>
            <DiscreteSlider />
          </Box>
          <Box pl={2} pr={2} mr={2} mb={2}>
            <DiscreteSliderLabel />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function valuetext(value: number) {
  return `${value}°C`;
}

function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom color="textPrimary">
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDownIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUpIcon />
        </Grid>
      </Grid>
      <Typography id="disabled-slider" gutterBottom color="textPrimary">
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />
    </div>
  );
}

function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom color="textPrimary">
        Temperature
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <Typography id="discrete-slider" gutterBottom>
        Disabled
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
        disabled
      />
    </div>
  );
}

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function DiscreteSliderLabel() {
  const classes = useStyles();

  return (
    <div className={classes.root2}>
      <Typography id="discrete-slider-always" gutterBottom color="textPrimary">
        Always visible
      </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
}
