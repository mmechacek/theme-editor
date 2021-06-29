import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { saveAs } from "file-saver";
import { pick } from "lodash";
import React from "react";
import { ThemeEditorContext } from "../../context/ThemeEditor";
import { getFormattedName } from "../../utils";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ExportDialog(props: Props) {
  const { config } = React.useContext(ThemeEditorContext);
  const [modules] = React.useState<string[]>(Object.keys(config));
  const [checked, setChecked] = React.useState<string[]>(["general"]);
  const [running, setRunning] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (checked.find((c) => c === event.target.name)) {
      setChecked([...checked.filter((x) => x !== event.target.name)]);
    } else {
      setChecked([...checked, event.target.name]);
    }
  };

  const handleExport = () => {
    if (!running) {
      setRunning(true);
      download().then(() => {
        setRunning(false);
      });
    }
  };

  const download = () => {
    const exportTheme = pick(config, checked);
    // const clean = extractValues(exportTheme);
    const fileToSave = new Blob([JSON.stringify(exportTheme, null, 2)], {
      type: "application/json",
    });
    saveAs(fileToSave, "theme.json");
    return Promise.resolve();
  };

  return (
    <Dialog maxWidth="sm" fullWidth open={props.open} onClose={props.onClose}>
      <DialogTitle>
        <Typography variant="h6" component="span">
          Export options
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box mb={2}>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            Choose modules you want to export:
          </Typography>
        </Box>
        <Box>
          {modules.length ? (
            <FormGroup>
              {modules.map((c) => {
                return (
                  <Box key={c}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked.find((x) => x === c) ? true : false}
                          onChange={handleChange}
                          name={c}
                          disabled={c === "general" ? true : false}
                        />
                      }
                      label={
                        c === "general" ? "Material UI" : getFormattedName(c)
                      }
                    />
                  </Box>
                );
              })}
            </FormGroup>
          ) : null}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="text" color="default" onClick={props.onClose}>
          Close
        </Button>
        <Button
          variant="text"
          color="primary"
          disabled={running}
          onClick={handleExport}
          startIcon={<CloudDownloadIcon />}
        >
          Export &amp; Download
        </Button>
      </DialogActions>
    </Dialog>
  );
}
