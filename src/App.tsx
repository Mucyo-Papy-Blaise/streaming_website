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
        <Routes>
          {/* Landing Page Route */}
          <Route path="/LandingPage" element={<LandingPage />} />
          
          {/* Mixes Page Route */}
          <Route path="/MixesPage" element={<MixesPage />} />
        </Routes>
        <AudioPlayer />
      </BrowserRouter>
    </AudioProvider>
  );
}

export default App;
