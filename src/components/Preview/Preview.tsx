import {
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import PreviewWrapper from "./PreviewWrapper";
interface Props {
  theme: Theme;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
    },
  })
);

export default function Preview(props: Props) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Toolbar />
      <ThemeProvider theme={props.theme}>
        <PreviewWrapper />
      </ThemeProvider>
    </main>
  );
}
