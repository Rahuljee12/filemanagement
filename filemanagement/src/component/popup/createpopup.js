import React, { useState } from "react";
import Button from "@mui/material/Button";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { Input } from "@mui/material";
import explorer from "../../data/explorer";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [folderName, setFolderName] = useState();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleCreateClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2 style={{ padding: 15 }}>Folder Name</h2>
      </div>

      <Input
        style={{ padding: 5, marginLeft: 15, marginRight: 15 }}
        onChange={(e) => setFolderName(e.target.value)}
      />
      <Button
        onClick={handleCreateClick}
        style={{
          justifyContent: "center",
          alignItems: "center",

          width: "22vw",
        }}
      >
        Create
      </Button>
    </Dialog>
  );
}

export default SimpleDialog;
