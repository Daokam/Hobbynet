import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import run from "../../../assets/icons/run.svg";
import L from "leaflet";
import { ReactNode } from "react";

export default function MapArea({
  currentMarkers,
}: {
  currentMarkers: ReactNode[];
}) {
  const displayMarkers = () => {
    const markers = [];
    for (let i = 0; i < currentMarkers.length; i++) {
      markers.push(currentMarkers[i]);
    }
    return markers;
  };

  return (
    <div id="map">
      <MapContainer
        style={{ height: "91vh", width: "100vw" }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <ZoomControl position="bottomleft" />

        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
          maxZoom={20}
        />
        {displayMarkers()}
      </MapContainer>
    </div>
  );
}
