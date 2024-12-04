import { useRef, useState } from "react";
import Map, {
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import MapSource from "./MapSource";
import type { MapRef, GeoJSONSource } from "react-map-gl";
import { Feature, Point } from "geojson";
import {
  clusterLayer,
  unclusteredPointLayer,
} from "../../services/mapbox/layers";
import PopupInfo from "./PopupInfo";

function DaycareMap() {
  const [popupInfo, setPopupInfo] = useState<Feature<Point> | null>(null);
  const mapRef = useRef<MapRef>(null);

  const onClick = (event) => {
    event.originalEvent.stopPropagation();

    const feature = event.features[0];
    if (!feature) {
      return;
    }

    if (feature.layer.id === unclusteredPointLayer.id) {
      // Display popup info for a location
      console.log("popupInfo", popupInfo);
      const location: Feature<Point> = {
        type: "Feature",
        geometry: feature.geometry,
        properties: feature.properties,
      };
      setPopupInfo(location);
    } else if (feature.layer.id === clusterLayer.id) {
      // zoom in for a cluster
      const clusterId = feature.properties.cluster_id;

      const mapboxSource = mapRef.current?.getSource(
        "my-data",
      ) as GeoJSONSource;

      mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err || zoom == null) {
          return;
        }

        mapRef.current?.easeTo({
          center: feature.geometry.coordinates,
          zoom,
          duration: 500,
        });
      });
    }
  };

  return (
    <div className="col-span-3">
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_TOKEN}
        initialViewState={{
          longitude: -122.75106,
          latitude: 49.269857,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/standard"
        interactiveLayerIds={[
          clusterLayer.id as string,
          unclusteredPointLayer.id as string,
        ]}
        onClick={onClick}
        ref={mapRef}
      >
        <GeolocateControl position="top-right" />
        <NavigationControl position="top-right" />
        <ScaleControl />

        <MapSource />

        <PopupInfo popupInfo={popupInfo} onClose={setPopupInfo} />
      </Map>
    </div>
  );
}

export default DaycareMap;
