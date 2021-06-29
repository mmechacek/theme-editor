import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Box, Paper, TextField, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      maxWidth: 700,
    },
    label: {
      display: "block",
      marginTop: 5,
      marginRight: theme.spacing(3),
      fontSize: "0.625rem",
      textTransform: "uppercase",
      textAlign: "left",
      color: theme.palette.text.hint,

      [theme.breakpoints.up("sm")]: {
        textAlign: "right",
      },
    },
    container: {
      padding: theme.spacing(2),

      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(4),
      },
    },
  })
);

export default function PreviewTypography() {
  const [lorem, setLorem] = React.useState<string>(
    "Lorem ipsum at dolor it amet"
  );
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLorem(event.target.value);
  };

  return (
    <Box mb={4}>
      <Box mb={2}>
        <Typography variant="h5" color="textPrimary">
          Typography
        </Typography>
      </Box>
      <Box mb={1}>
        <Paper variant="outlined">
          <Box pb={2} className={classes.container}>
            <TextField
              value={lorem}
              onChange={handleChange}
              name="text"
              label="Write your text you want to show"
              fullWidth
            />
          </Box>
          <Box className={classes.container}>
            <Types text={lorem} />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

function Types(props: { text: string }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3} md={2}>
          <div className={classes.label}>h1</div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography
            className={classes.text}
            variant="h1"
            component="h2"
            gutterBottom
          >
            {props.text}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3} md={2}>
          <div className={classes.label}>h2</div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography className={classes.text} variant="h2" gutterBottom>
            {props.text}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3} md={2}>
          <div className={classes.label}>h3</div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography className={classes.text} variant="h3" gutterBottom>
            {props.text}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3} md={2}>
          <div className={classes.label}>h4</div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography className={classes.text} variant="h4" gutterBottom>
            {props.text}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3} md={2}>
          <div className={classes.label}>h5</div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            {props.text}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3} md={2}>
          <div className={classes.label}>h6</div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography className={classes.text} variant="h6" gutterBottom>
            {props.text}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3} md={2}>
          <div className={classes.label}>subtitle1</div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography className={classes.text} variant="subtitle1" gutterBottom>
            {props.text}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3} md={2}>
          <div className={classes.label}>subtitle2</div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography className={classes.text} variant="subtitle2" gutterBottom>
            {props.text}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3} md={2}>
          <div className={classes.label}>body1</div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography className={classes.text} variant="body1" gutterBottom>
            {[...Array(4)].map((i) => props.text + " ")}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3} md={2}>
          <div className={classes.label}>body2</div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography className={classes.text} variant="body2" gutterBottom>
            {[...Array(4)].map((i) => props.text + " ")}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3} md={2}>
          <div className={classes.label}>button</div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography
            className={classes.text}
            variant="button"
            display="block"
            gutterBottom
          >
            {props.text}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3} md={2}>
          <div className={classes.label}>caption</div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography
            className={classes.text}
            variant="caption"
            display="block"
            gutterBottom
          >
            {props.text}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3} md={2}>
          <div className={classes.label}>overline</div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Typography
            className={classes.text}
            variant="overline"
            display="block"
            gutterBottom
          >
            {props.text}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
