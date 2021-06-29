import { ThemeProvider } from "@material-ui/core";
import React from "react";
import Editor from "./components/Editor";
import { editorTheme } from "./config/config";
import ThemeEditorProvider from "./context/ThemeEditor";

function App() {
  return (
    <ThemeProvider theme={editorTheme}>
      <ThemeEditorProvider>
        <Editor />
      </ThemeEditorProvider>
    </ThemeProvider>
  );
}

export default App;
