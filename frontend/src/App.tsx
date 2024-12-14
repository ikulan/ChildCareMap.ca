import DaycareMap from "./components/map/DaycareMap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { MapProvider } from "react-map-gl";
import RegionModel from "./components/options/RegionModel";
import useConfigStore from "./stores/configStore";

export default function App() {
  const regionModalIsOpen = useConfigStore((state) => state.regionModalIsOpen);
  const closeRegionModal = useConfigStore((state) => state.closeRegionModal);

  return (
    <div className="m-auto h-svh max-w-screen-xl">
      <MapProvider>
        <Header />
        {regionModalIsOpen && (
          <RegionModel isOpen={regionModalIsOpen} onClose={closeRegionModal} />
        )}
        <main className="mb-2 grid h-5/6 grid-cols-3 grid-rows-1 px-4">
          <DaycareMap />
        </main>
        <Footer />
      </MapProvider>
    </div>
  );
}
