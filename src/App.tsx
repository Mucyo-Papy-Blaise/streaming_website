import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import MixesPage from "./Pages/MixesPage";
import { AudioProvider } from './context/AudioContext'
function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="*" element={<MixesPage />} />
      </Routes>
    </BrowserRouter>
    </AudioProvider>
  );
}

export default App;
