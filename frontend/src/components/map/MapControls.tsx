import {
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";

function MapControls() {
  return (
    <>
      <GeolocateControl position="top-right" />
      <NavigationControl position="top-right" />
      <ScaleControl />
    </>
  );
}

export default MapControls;
