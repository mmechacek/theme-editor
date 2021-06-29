import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@material-ui/core";
import { DiffEditor, monaco } from "@monaco-editor/react";
import { isEqual } from "lodash";
import React from "react";
import { MergeStatus, ThemeProperty } from "../../types";
import { useUploadStyles } from "./styles";
import { isJsonString } from "../../utils";

interface Props {
  open: boolean;
  mergeStatus: MergeStatus;
  originalTheme: ThemeProperty;
  importedTheme: ThemeProperty;
  mergeThemes: boolean;
  onToggleMerge: () => void;
  onChange: (obj: any) => void;
}

const options = {};

monaco.config({
  paths: {
    // vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.20.0/min/vs" // this one is default
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.19.3/min/vs", // switch to this one - DO REFRESH AFTER CHANGE
  },
});

export default function MergeEditor(props: Props) {
  const classes = useUploadStyles();
  const { onChange } = props;
  const valueRef = React.useRef<any>(null);
  const editorRef = React.useRef<any>(null);

  const [isReady, setIsReady] = React.useState<boolean>(false);

  // On mount
  const handleEditorDidMount = (modified: any, original: any, editor: any) => {
    valueRef.current = modified;
    editorRef.current = editor;
    if (isJsonString(valueRef.current())) {
      props.onChange(JSON.parse(valueRef.current()));
    }
    setIsReady(true);
  };

  // Update edited value
  React.useEffect(() => {
    if (isReady) {
      editorRef.current.onDidUpdateDiff(() => {
        if (isJsonString(valueRef.current())) {
          onChange(JSON.parse(valueRef.current()));
        }
      });
    }
  }, [isReady, valueRef, onChange]);

  return (
    <Box className={classes.editorWrapper}>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Box className={classes.editorTabHeader}>
              <Typography variant="overline" color="inherit">
                Default config
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.editorTabHeader}>
              <Typography variant="overline" color="inherit">
                Imported config
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.editor} style={{ position: "relative" }}>
        {props.open && props.mergeStatus === "merging" ? (
          <DiffEditor
            original={JSON.stringify(props.originalTheme, null, 2)}
            modified={JSON.stringify(props.importedTheme, null, 2)}
            editorDidMount={handleEditorDidMount}
            language="json"
            theme="light"
            options={options}
          />
        ) : null}
      </Box>
      <Box pt={2} textAlign="right">
        <FormControlLabel
          control={
            <Checkbox
              checked={props.mergeThemes}
              onChange={props.onToggleMerge}
              name="mergeDefaults"
              disabled={isEqual(props.originalTheme, props.importedTheme)}
            />
          }
          label="Merge theme to default?"
        />
      </Box>
    </Box>
  );
}
