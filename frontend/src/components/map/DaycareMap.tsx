import Map, {
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import MapSource from "./MapSource";

function DaycareMap() {
  return (
    <div className="col-span-3">
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_TOKEN}
        initialViewState={{
          longitude: -122.75106,
          latitude: 49.269857,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <GeolocateControl position="top-right" />
        <NavigationControl position="top-right" />
        <ScaleControl />

        <MapSource />
      </Map>
    </div>
  );
}

export default DaycareMap;
