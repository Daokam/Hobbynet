import "./search-area.css";
import { TextField } from "@mui/material";

export default function SearchArea() {
  return (
    <div className="search-area">
      <div className="search-container">
        <div className="search-bar">
          <TextField
            id="filled-basic"
            color="secondary"
            label="Search"
            variant="filled"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
