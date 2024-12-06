import DaycareList from "./components/DaycareList";
import DaycareMap from "./components/map/DaycareMap";
import Footer from "./components/Footer";
import Header from "./components/header/Header";

export default function App() {
  return (
    <div className="m-auto h-svh max-w-screen-xl">
      <Header />
      <main className="mb-2 grid h-5/6 grid-cols-4 grid-rows-1">
        <DaycareList />
        <DaycareMap />
      </main>
      <Footer />
    </div>
  );
}
