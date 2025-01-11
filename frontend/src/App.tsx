import { BrowserRouter, Route, Routes } from "react-router";
import Map from "./pages/Map.tsx";
import About from "./pages/About.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Map />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
