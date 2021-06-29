import {
  Box,
  Typography,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Select,
  MenuItem,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
  })
);

export default function PreviewForm() {
  // select state
  const [age, setAge] = React.useState("10");
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <Box mb={4}>
      <Box mb={2}>
        <Typography variant="h6" color="textPrimary">
          Fields
        </Typography>
      </Box>
      <Box mb={1}>
        <form noValidate autoComplete="off">
          <Box mb={1} display="flex" flexWrap="wrap">
            <Box mr={2} mb={2}>
              <TextField name="standardBasic" label="Standard" />
            </Box>
            <Box mr={2} mb={2}>
              <TextField
                id="standard-secondary"
                label="Standard secondary"
                color="secondary"
              />
            </Box>
            <Box mr={2} mb={2}>
              <TextField
                name="standardBasicDisabled"
                label="Standard"
                defaultValue="Disabled"
                disabled
              />
            </Box>
            <Box mr={2} mb={2}>
              <TextField
                name="standardBasicDisabled"
                label="Standard"
                defaultValue="Disabled"
                error
                helperText="Incorrect entry."
              />
            </Box>
          </Box>
          <Box mb={1} display="flex" flexWrap="wrap">
            <Box mr={2} mb={2}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mr={2} mb={2}>
              <FormControl>
                <InputLabel htmlFor="input-with-icon-adornment">
                  With a start adornment
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box mr={2} mb={2}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircleIcon />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="With a grid" />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box mb={1} display="flex" flexWrap="wrap">
            <Box mr={2} mb={2}>
              <TextField name="filledBasic" label="Filled" variant="filled" />
            </Box>
            <Box mr={2} mb={2}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
