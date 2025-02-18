import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import MixesPage from "./Pages/MixesPage";
import { AudioProvider } from './context/AudioContext';
import AudioPlayer from "./Component/AudioPlayer";
import Uploading from "./Pages/Uploading";
import { useUserContext } from "./Component/AuthContext";
import LoadingComponent from "./Component/LoadingComponent";

function App() {
  const { isLoading } = useUserContext();
  // if(isLoading) return <LoadingComponent />
  return (
    <AudioProvider>
      <BrowserRouter>
        <div className="relative min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/MixesPage" element={<MixesPage />} />
            <Route path="/Uploading" element = {<Uploading />} />
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