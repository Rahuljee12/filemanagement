import ResponsiveAppBar from "./appbar";
import Folder from "./folder";
import explorer from "../data/explorer";
import { Divider } from "@mui/material";
import ResponsiveSubHeader from "./subheader";
import FolderDetails from "./bodyContent/folderdetails";
import { useState } from "react";

export default function MainBoady() {
  const [change, setChange] = useState(false);
  return (
    <div style={{ background: "#FDEDEC ", height: "100vh" }}>
      <ResponsiveAppBar />
      <div style={{ display: "flex" }}>
        <div
          style={{
            paddingTop: 20,
            paddingLeft: 30,
            width: "25vw",
            background: "#F9EBEA ",
          }}
          className="folderfonts"
        >
          {/* <FileExplorer /> */}
          <Folder explorer={explorer} />
        </div>
        {/* <Divider
          orientation="vertical"
          flexItem
          style={{ marginLeft: 0, height: "100vh" }}
        /> */}
        <div>
          <ResponsiveSubHeader />
          <FolderDetails />
        </div>
      </div>
    </div>
  );
}
