import Header from "../../components/main-page/header/header";
import "./main-page.css";
import "leaflet/dist/leaflet.css";
import MainAreaTopStack from "../../components/main-page/main-area-top-stack/main-area-top-stack";
import MapArea from "../../components/main-page/map-area/map-area";
import { ReactNode, useState } from "react";

export default function MainPage() {
  const [currentMarkers, setCurrentMarkers] = useState<ReactNode[]>([]);

  const addMarker = (marker: ReactNode) => {
    setCurrentMarkers([...currentMarkers, marker]);
  };
  return (
    <div className="main-container">
      <Header></Header>
      <MainAreaTopStack addMarker={addMarker}></MainAreaTopStack>
      <MapArea currentMarkers={currentMarkers}></MapArea>
    </div>
  );
}
