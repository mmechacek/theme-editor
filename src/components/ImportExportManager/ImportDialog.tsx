import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { merge } from "lodash";
import React from "react";
import { ThemeEditorContext } from "../../context/ThemeEditor";
import { LoadStatus, MergeStatus, ThemeProperty } from "../../types";
import MergeEditor from "./MergeEditor";
import ThemeUploader from "./ThemeUploader";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ImportDialog(props: Props) {
  const { config: originalTheme, importTheme } = React.useContext(
    ThemeEditorContext
  );
  const [loadStatus, setLoadStatus] = React.useState<LoadStatus>("init");
  const [mergeStatus, setMergeStatus] = React.useState<MergeStatus>("init");
  const [importedTheme, setImportedTheme] = React.useState<ThemeProperty>({});
  const [editedTheme, setEditedTheme] = React.useState<ThemeProperty>({});
  const [mergeThemes, setMergeThemes] = React.useState<boolean>(false);

  const handleToggleMerge = () => {
    setMergeThemes(!mergeThemes);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;

    if (files && files.length) {
      for (let i = 0, f; (f = files[i]); i++) {
        const reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(f);
      }
    }
  };

  const onReaderLoad = (event: any) => {
    let _theme = JSON.parse(event.currentTarget.result);
    setImportedTheme(_theme as ThemeProperty);
    setLoadStatus("loaded");
  };

  const resetUpload = () => {
    setLoadStatus("init");
    setMergeStatus("init");
    setImportedTheme({});
  };

  const handleUpdate = (obj: any) => {
    console.log(obj);
    setEditedTheme(obj);
  };
  // Update imported
  const updateEdited = React.useCallback(handleUpdate, []);

  React.useEffect(() => {
    if (loadStatus === "loaded" && Object.keys(importedTheme).length) {
      setMergeStatus("merging");
    }
  }, [loadStatus, importedTheme]);

  const handleSetTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (mergeThemes) {
      importTheme(merge(originalTheme, { ...editedTheme }));
    } else {
      importTheme({ ...editedTheme });
    }
    resetUpload();
    props.onClose();
  };

  return (
    <Dialog
      maxWidth={mergeStatus === "merging" ? undefined : "sm"}
      fullWidth={mergeStatus === "merging" ? false : true}
      fullScreen={mergeStatus === "merging" ? true : false}
      open={props.open}
      onClose={props.onClose}
    >
      <DialogTitle>
        <Typography variant="h6" component="span">
          Import theme JSON
        </Typography>
      </DialogTitle>
      <DialogContent>
        {loadStatus === "init" ? (
          <ThemeUploader onUpload={handleUpload} />
        ) : null}
        {loadStatus === "loaded" && Object.keys(importedTheme).length ? (
          <React.Fragment>
            <MergeEditor
              open={props.open}
              mergeStatus={mergeStatus}
              originalTheme={originalTheme}
              importedTheme={importedTheme}
              mergeThemes={mergeThemes}
              onToggleMerge={handleToggleMerge}
              onChange={updateEdited}
            />
          </React.Fragment>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button
          variant="text"
          color="default"
          onClick={() => {
            resetUpload();
            props.onClose();
          }}
        >
          Cancel
        </Button>
        <Button
          variant="text"
          color="primary"
          onClick={handleSetTheme}
          startIcon={<CheckIcon />}
          disabled={mergeStatus === "merging" ? false : true}
        >
          Load theme
        </Button>
      </DialogActions>
    </Dialog>
  );
}
