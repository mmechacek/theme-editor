import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export default function PreviewBadges() {
  return (
    <Box mb={4}>
      <Box mb={2}>
        <Typography variant="h6" color="textPrimary">
          Badges
        </Typography>
      </Box>
      <Box mb={1}>
        <SimpleBadge />
      </Box>
    </Box>
  );
}

function SimpleBadge() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="error">
        <MailIcon />
      </Badge>
    </div>
  );
}
