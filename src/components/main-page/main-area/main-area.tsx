import { Grid } from "@mui/material";
import "./main-area.css";

export default function MainArea() {
  return (
    <Grid container className="mainContainer">
      <Grid item xs={2}>
        <div className="searchContainer">Search</div>
      </Grid>
      <Grid item xs={7.5}>
        <div className="mapContainer">Map</div>
      </Grid>
      <Grid item xs={2.5}>
        <div className="createContainer">Create</div>
      </Grid>
    </Grid>
  );
}
