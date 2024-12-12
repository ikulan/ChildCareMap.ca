import { useEffect, useState } from "react";
import { Layer, Source } from "react-map-gl";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "../../services/mapbox/layers";

const sourceUrl = (cityHandle: string): string => {
  return `${import.meta.env.VITE_DATA_URL}/data/${cityHandle}.geojson`;
};

function MapSource({ cityHandle }: { cityHandle: string }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = sourceUrl(cityHandle);
    /* global fetch */
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Could not load data", err)); // eslint-disable-line
  }, [cityHandle]);

  return (
    <Source
      id="my-data"
      type="geojson"
      data={data}
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
