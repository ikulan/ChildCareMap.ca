import { useEffect, useState } from "react";
import { Layer, Source } from "react-map-gl";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "../../services/mapbox/layers";

const sourceUrl = (city: string): string => {
  return `${import.meta.env.VITE_DATA_URL}/data/${city}.geojson`;
};

function MapSource({ city }: { city: string }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = sourceUrl(city);
    /* global fetch */
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Could not load data", err)); // eslint-disable-line
  }, [city]);

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
