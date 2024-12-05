import { Layer, Source } from "react-map-gl";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "../../services/mapbox/layers";

function MapSource() {
  return (
    <Source
      id="my-data"
      type="geojson"
      data="./poco.geojson"
      cluster={true}
      clusterRadius={50}
      clusterMinPoints={5}
    >
      <Layer {...clusterLayer} />
      <Layer {...clusterCountLayer} />
      <Layer {...unclusteredPointLayer} />
    </Source>
  );
}

export default MapSource;
