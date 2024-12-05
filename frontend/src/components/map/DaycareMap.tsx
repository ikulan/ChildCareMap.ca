import { useRef, useState } from "react";
import Map, { MapRef, GeoJSONSource } from "react-map-gl";

import MapControls from "./MapControls";
import MapSource from "./MapSource";
import PopupInfo from "./PopupInfo";

import { layerIds } from "../../services/mapbox/layers";
import type { Location } from "../../types/interfaces";

function DaycareMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );
  const mapRef = useRef<MapRef>(null);

  const onClick = (event) => {
    event.originalEvent.stopPropagation();

    const feature = event.features[0];
    if (!feature) {
      return;
    }

    if (feature.layer.id === layerIds.point) {
      // Display popup info for a location
      const location: Location = {
        position: {
          longitude: Number(feature.geometry.coordinates[0]),
          latitude: Number(feature.geometry.coordinates[1]),
        },
        info: feature.properties,
      };
      setSelectedLocation(location);
    } else if (feature.layer.id === layerIds.cluster) {
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
          zoom: zoom + 2,
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
        maxZoom={20}
        minZoom={4}
        interactiveLayerIds={[
          layerIds.cluster as string,
          layerIds.point as string,
        ]}
        onClick={onClick}
        ref={mapRef}
      >
        <MapControls />
        <MapSource />

        <PopupInfo location={selectedLocation} onClose={setSelectedLocation} />
      </Map>
    </div>
  );
}

export default DaycareMap;
