import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { useUploadStyles } from "./styles";

interface Props {
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ThemeUploader(props: Props) {
  const classes = useUploadStyles();

  return (
    <Box p={4} textAlign="center">
      <Typography
        variant="subtitle2"
        color="textSecondary"
        gutterBottom
        component="span"
        style={{ marginRight: 10 }}
      >
        Upload file form your disk:
      </Typography>
      <input
        accept="application/json"
        className={classes.input}
        id="uploadTheme"
        type="file"
        onChange={props.onUpload}
      />
      <label htmlFor="uploadTheme">
        <Button variant="contained" color="primary" component="span">
          Upload theme
        </Button>
      </label>
    </Box>
  );
}
