import CreateArea from "./create-area/create-area";
import "./main-area-top-stack.css";
import SearchArea from "./search-area/search-area";

export default function MainAreaTopStack({
  addMarker,
}: {
  addMarker: (marker: React.ReactNode) => void;
}) {
  return (
    <div className="main-area">
      <SearchArea></SearchArea>
      <div className="divider"></div>
      <CreateArea addMarker={addMarker}></CreateArea>
    </div>
  );
}
