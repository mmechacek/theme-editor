import { createMuiTheme, CssBaseline, useTheme } from "@material-ui/core";
import React from "react";
import { ThemeEditorContext } from "../../context/ThemeEditor";
import { extractValues } from "../../utils";
import Manager from "../ImportExportManager";
import NavBar from "../NavBar/NavBar";
import Preview from "../Preview";
import AppDrawer from "./AppDrawer";
import { useEditorStyles } from "./styles";

export default function Editor() {
  const classes = useEditorStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { config } = React.useContext(ThemeEditorContext);
  const [previewTheme, setPreviewTheme] = React.useState(createMuiTheme({}));
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Update preview theme
  React.useEffect(() => {
    const keys = Object.keys(config);
    if (keys.some((k) => k === "general")) {
      let muiTheme = Object.entries(config).find((o) => o[0] === "general");
      if (muiTheme) {
        setPreviewTheme(createMuiTheme({ ...extractValues(muiTheme[1]) }));
      } else {
        setPreviewTheme(theme);
      }
    }
  }, [config, theme]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar onToggleMenu={handleDrawerToggle} />
      <AppDrawer onToggleMenu={handleDrawerToggle} mobileOpen={mobileOpen} />
      <Preview theme={previewTheme} />
      <Manager />
    </div>
  );
}
