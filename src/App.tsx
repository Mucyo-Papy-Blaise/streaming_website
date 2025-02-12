import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import MixesPage from "./Pages/MixesPage";
import { AudioProvider } from './context/AudioContext';
import AudioPlayer from "./Component/AudioPlayer";

function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <div className="relative min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/MixesPage" element={<MixesPage />} />
          </Routes>
          <div className="relative z-50">
            <AudioPlayer />
          </div>
        </div>
      </BrowserRouter>
    </AudioProvider>
  );
}

export default App;