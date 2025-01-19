import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import MixesPage from "./Pages/MixesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="*" element={<MixesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
