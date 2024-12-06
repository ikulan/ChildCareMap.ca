import { Layer, Source } from "react-map-gl";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "../../services/mapbox/layers";

function MapSource({ sourceUrl }: { sourceUrl: string }) {
  return (
    <Source
      id="my-data"
      type="geojson"
      data={sourceUrl}
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
