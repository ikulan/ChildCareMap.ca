import { useEffect, useRef, useState } from "react";
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
  const cache = useRef(new Map()); // Use a ref to persist data cache across renders

  useEffect(() => {
    const url = sourceUrl(cityHandle);

    if (cache.current.has(cityHandle)) {
      // If data for this city is in the cache, use it
      setData(cache.current.get(cityHandle));
    } else {
      // Otherwise, fetch the data and store it in the cache
      fetch(url)
        .then((resp) => resp.json())
        .then((json) => {
          cache.current.set(cityHandle, json); // Save data to cache
          setData(json);
        })
        .catch((err) => console.error("Could not load data", err));
    }
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
