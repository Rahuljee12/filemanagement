import { useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import "../App.css";
function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [id, setId] = useState();

  return (
    <div
      style={{
        paddingLeft: 15,
        fontSize: 16,
      }}
      className="fontfamily"
    >
      <span
        onClick={() => {
          if (explorer.isFolder === true) {
            setExpand(!expand);
            setId(explorer.id);
          }
        }}
        style={{ display: "flex", alignItems: "center" }}
      >
        <span
          style={{
            display: explorer.isFolder === true ? "inline" : "none",
          }}
        >
          <FolderIcon style={{ color: "#F6BE00" }} />
        </span>
        <span
          style={{ display: explorer.isFolder === false ? "inline" : "none" }}
        >
          <TextSnippetIcon />
        </span>
        {explorer.name}
      </span>
      <br />

      <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
        {explorer.items.map((explore) => (
          <Folder key={explore.name} explorer={explore} />
        ))}
      </div>
    </div>
  );
}

export default Folder;
