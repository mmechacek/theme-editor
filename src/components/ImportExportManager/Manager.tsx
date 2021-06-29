import { Fab } from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import React from "react";
import { useExportManagerStyles } from "./styles";
import ExportDialog from "./ExportDialog";
import ImportDialog from "./ImportDialog";
import PublishIcon from "@material-ui/icons/Publish";

export default function ExportManager() {
  const classes = useExportManagerStyles();
  const [open, setOpen] = React.useState<boolean>(false);
  const [openImport, setOpenImport] = React.useState<boolean>(false);

  const handleOpenManager = () => {
    setOpen(true);
  };

  const handleOpenImport = () => {
    setOpenImport(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenImport(false);
  };

  return (
    <React.Fragment>
      <ExportDialog open={open} onClose={handleClose} />
      <ImportDialog open={openImport} onClose={handleClose} />
      <div className={classes.fabWrapper}>
        <Fab
          color="secondary"
          className={classes.fab}
          onClick={handleOpenManager}
        >
          <SaveAltIcon />
        </Fab>
        <Fab color="primary" className={classes.fab} onClick={handleOpenImport}>
          <PublishIcon />
        </Fab>
      </div>
    </React.Fragment>
  );
}
