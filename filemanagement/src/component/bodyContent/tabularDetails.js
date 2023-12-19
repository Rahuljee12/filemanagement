import React from "react";
import explorer from "../../data/explorer";
import FolderIcon from "@mui/icons-material/Folder";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const TabularDetails = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>My Files</TableCell>
          <TableCell>Size</TableCell>
          <TableCell>Path</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {explorer.items.map((explore) => (
          <TableRow>
            <TableCell
              style={{
                borderBottom: "none",

                paddingTop: 5,
                paddingBottom: 0,
              }}
            >
              <span
                style={{
                  display: "flex",
                  // alignItems: "center",
                  fontSize: 16,
                }}
              >
                <span
                  style={{
                    display: explore.isFolder === true ? "inline" : "none",
                  }}
                >
                  <FolderIcon
                    style={{
                      color: "#F6BE00",
                      alignSelf: "center",
                    }}
                  />
                </span>
                <span
                  style={{
                    display: explore.isFolder === false ? "inline" : "none",
                  }}
                >
                  <TextSnippetIcon />
                </span>

                {explore.name}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TabularDetails;
