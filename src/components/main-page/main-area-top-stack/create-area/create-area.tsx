import { Button, TextField } from "@mui/material";
import "./create-area.css";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import run from "../../../../assets/icons/run.svg";

export default function CreateArea({
  addMarker,
}: {
  addMarker: (marker: React.ReactNode) => void;
}) {
  const add = () => {
    addMarker(
      <Marker
        position={[51.505, -0.09]}
        icon={L.icon({ iconUrl: run, iconSize: [40, 60] })}
      >
        <Popup className="request-popup">
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    );
  };
  return (
    <div className="create-area">
      <div className="create">
        <div className="name-field">
          <TextField
            id="filled-basic"
            color="secondary"
            label="Name"
            variant="filled"
            style={{
              width: "100%",
            }}
          />
        </div>
        <div className="location-field">
          <TextField
            id="filled-basic"
            color="secondary"
            label="Location"
            variant="filled"
            style={{
              width: "100%",
            }}
          />
        </div>
        <div className="create-button">
          <Button variant="contained" color="secondary" onClick={add}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}
