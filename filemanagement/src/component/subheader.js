import { Button, List, ListItem, Typography } from "@mui/material";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import React, { useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SimpleDialog from "./popup/createpopup";
export default function Subheader() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    // changev(true);
    // setSelectedValue(value);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "70vw",
        height: "5vh",
        border: "1.5px solid #F1948A ",
        borderRadius: "5px",
        //marginLeft: 10,
        marginTop: 20,
        paddingBottom: 10,
        background: "#F5B7B1 ",
      }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <Button
            style={{
              width: "10vw",
              height: "5vh",
            }}
            onClick={handleClickOpen}
          >
            <CreateNewFolderIcon />
            <Typography
              variant="subheader"
              style={{ fontSize: 10, fontWeight: "bold" }}
            >
              Create
            </Typography>
          </Button>
        </div>

        <div>
          <Button
            style={{
              width: "10vw",
              height: "5vh",
            }}
          >
            <UploadFileIcon />
            <Typography
              variant="subheader"
              style={{ fontSize: 10, fontWeight: "bold" }}
            >
              Upload
            </Typography>
          </Button>
        </div>
      </div>
      <SimpleDialog
        // selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
