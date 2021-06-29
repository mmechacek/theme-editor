import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Container,
  Box,
  Typography,
} from "@material-ui/core";
import PreviewAppBars from "./PreviewAppBars";
import PreviewButtons from "./PreviewButtons";
import PreviewFormWrap from "./PreviewFormWrap";
import PreviewNavigationPanel from "./PreviewNavigationPanel";
import PreviewMenu from "./PreviewMenu";
import PreviewTabs from "./PreviewTabs";
import PreviewAlerts from "./PreviewAlerts";
import PreviewTypography from "./PreviewTypography";

const usePreviewWrapperStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
  })
);

export default function PreviewWrapper() {
  const classes = usePreviewWrapperStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Box mb={4}>
          <Typography variant="h4" component="h2" color="textPrimary">
            Preview components
          </Typography>
        </Box>
        <PreviewAppBars />
        <PreviewButtons />
        <PreviewFormWrap />
        <PreviewNavigationPanel />
        <PreviewMenu />
        <PreviewTabs />
        <PreviewAlerts />
        <PreviewTypography />
      </Container>
    </div>
  );
}
