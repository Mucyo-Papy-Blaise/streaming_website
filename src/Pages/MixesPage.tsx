import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/mucyo1.png";
import imageprfl from "../assets/76838388.png";
import { useAudio } from '../context/AudioContext';
import AudioPlayer from "../Component/AudioPlayer"
import {
  FaHome,
  FaClock,
  FaMusic,
  FaBroadcastTower,
  FaHeart,
  FaListUl,
  FaChevronDown,
  FaChevronUp,
  FaSignOutAlt,
  FaSearch,
  FaBell,
  FaPlayCircle,
  FaPauseCircle,
  FaBars,
  FaTimes
} from "react-icons/fa";

// Move this to a separate constants file if used across multiple components
const recomend = [
  { id: 1, icon: <FaHome />, name: "Feed" },
  { id: 2, icon: <FaClock />, name: "Recents" },
  { id: 3, icon: <FaMusic />, name: "Acid Mixes" },
  { id: 4, icon: <FaBroadcastTower />, name: "Live Mix" }
];

const yourMusic = [
  { id: 1, icon: <FaHeart />, name: "Favourite" },
  { id: 2, icon: <FaListUl />, name: "PlayList" }
];

const genre = [
  { id: 1, name: "All Genre" },
  { id: 2, name: "AfroBeats" },
  { id: 3, name: "Hip Hop" },
  { id: 4, name: "Gospel" },
  { id: 5, name: "Electronics" }
];

const MixesPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    isPlaying,
    setIsPlaying,
    selectedMix,
    setSelectedMix,
    audioRef,
    mixCardData,
    setHasStartedPlaying,
    hasStartedPlaying
  } = useAudio();

  const [isGenreOpen, setIsGenreOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleGenre = () => setIsGenreOpen(prev => !prev);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className="flex min-h-screen w-full bg-[#161720] relative">
      <audio ref={audioRef} />
      {hasStartedPlaying && <AudioPlayer />}

      {/* Mobile Menu Button */}
      <div className="block md:hidden fixed top-4 left-4 z-50">
        <button 
          className="text-white text-2xl p-2 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes/> : <FaBars/>}
        </button>
      </div>

      {/* Left NavBar */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block md:w-[250px] min-w-[250px] h-screen fixed md:sticky top-0 left-0 bg-[#161720] z-40 border-r-2 border-[#ffffff32] overflow-y-auto`}>
        <div className="p-10 pb-20">
          <div onClick={() => navigate("/LandingPage")}>
            <img
              src={logo}
              alt="logo"
              className="w-[60px] md:w-[108px] mt-4 md:mt-6 cursor-pointer"
            />
          </div>

          {/* Recommend Section */}
          <div className="md:mt-6 mt-3">
            {recomend.map((reco) => (
              <div
                key={reco.id}
                className="mt-4 flex flex-row gap-3 text-white cursor-pointer hover:text-[#fa0153]"
                onClick={() => setIsMenuOpen(false)}
              >
                <h2 className="text-[18px] mt-[2px]">{reco.icon}</h2>
                <h2 className="font-raleway text-[17px]">{reco.name}</h2>
              </div>
            ))}
          </div>

          {/* Your Music Section */}
          <div className="mt-6">
            <h1 className="font-raleway font-thin text-[20px] text-white">
              Your Music
            </h1>
            {yourMusic.map((your) => (
              <div
                key={your.id}
                className="mt-4 flex flex-row gap-3 text-white cursor-pointer hover:text-[#fa0153]"
                onClick={() => setIsMenuOpen(false)}
              >
                <h2 className="text-[18px] mt-[2px]">{your.icon}</h2>
                <h2 className="font-raleway text-[17px]">{your.name}</h2>
              </div>
            ))}
          </div>

          {/* Genre Section */}
          <div className="mt-6">
            <h1
              onClick={handleGenre}
              className="font-raleway font-thin text-[20px] text-white flex flex-row justify-center items-center gap-1 cursor-pointer"
            >
              {isGenreOpen ? (
                <FaChevronUp className="text[15px]" />
              ) : (
                <FaChevronDown className="text[15px] text-[#fa0153]" />
              )}
              All Genres
            </h1>
            {isGenreOpen && (
              <div className="mt-0 p-2 w-26 h-full rounded-md bg-[#323232]">
                {genre.map((gen) => (
                  <div
                    key={gen.id}
                    className="flex flex-row gap-3 text-white cursor-pointer hover:text-[#fa0153]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <h2 className="font-raleway text-[17px]">{gen.name}</h2>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Logout Button */}
          <div className="mt-10 flex flex-row mr-4 gap-3 text-[#767575] cursor-pointer hover:text-[#fa0153]">
            <FaSignOutAlt className="text-[18px] mt-[2px]" />
            <h2 className="font-raleway text-[17px] font-bold">Log Out</h2>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-h-screen">
        <div className="h-full overflow-y-auto pb-[90px]">
          <div className="p-3 md:p-8 md:mt-0 mt-10">
            {/* Search and Profile Section */}
            <div className="relative flex flex-col-reverse md:flex-row justify-between gap-2 md:gap-6">
              <div className="flex flex-row items-center">
                <FaSearch className="absolute ml-4 text-white text-xl font-thin" />
                <input
                  type="text"
                  placeholder="Artist, Mix Name, Genre"
                  className="bg-[#3e3e3ed8] pl-12 p-2 w-[380px] md:w-[1000px] h-[50px] rounded-lg outline-none border-none text-white font-raleway"
                />
              </div>

              <div className="flex flex-row items-center justify-end mb-4">
                <div className="relative cursor-pointer">
                  <FaBell className="text-white text-[23px] ml-4 hover:text-[#fa0153]" />
                  <div className="absolute w-5 h-5 -top-3 -right-1 bg-[#fa0153] rounded-lg flex justify-center items-center font-raleway text-[12px] font-bold text-white p-2">
                    15
                  </div>
                </div>

                <div className="w-10 h-10 ml-4 rounded-full bg-white overflow-hidden">
                  <img src={imageprfl} alt="ProfileCircle" className="object-cover" />
                </div>
                <button
                  className="w-[70px] md:w-[150px] md:h-[40px] h-[30px] text-white text-[15px] font-bold bg-[#fa0153] hover:bg-[#c46182] ml-4 rounded"
                  onClick={() => navigate("/LandingPage")}
                >
                  Home
                </button>
              </div>
            </div>

            {/* Mix Details */}
            <div className="mt-10 min-h-[150px]">
              {selectedMix.name ? (
                <div className="max-w-[450px]">
                  <p className="font-raleway font-bold text-[25px] text-white">
                    {selectedMix.name}
                  </p>
                  <p className="text-[#fffb] font-raleway mt-3">
                    {selectedMix.descr}
                  </p>
                  <p className="font-bold font-raleway text-[#fa0153]">
                    <span className="text-white">Genre: </span>{selectedMix.Genre}
                  </p>
                  <p className="mt-3 text font-raleway text-[#744753] text-center rounded bg-[#d7d7d7] p-1">
                    {selectedMix.artist}
                  </p>
                </div>
              ) : (
                <div className="min-h-[150px] rounded flex items-center">
                  <p className="text-[#ffffff] font-raleway font-semibold text-[20px]">
                    Click on a mix to see details...!
                  </p>
                </div>
              )}
            </div>

            {/* Mix Cards Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-2">
              {mixCardData.map((card) => (
                <div
                  key={card.id}
                  className={`relative md:flex md:flex-col flex flex-row md:-w-[230px] md:h-[330px] bg-[#323232] justify-center items-center rounded-sm shadow-sm pt-1 group transition duration-200 ease-out ${
                    selectedMix.audio === card.audio ? "scale-105 bg-[#514545]" : ""
                  }`}
                >
                  <div className="bg-[#323232] w-[80px] h-[80px] md:w-[200px] md:h-[200px] overflow-hidden rounded-md mx-2 md:mx-4 cursor-pointer">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="object-cover w-full h-full rounded-md hover:opacity-[60%]"
                    />
                    <div
                      className="absolute top-[50%] md:top-[30%] left-1/2 md:left-1/2 transform md:transform -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 md:-translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
                      onClick={() => {
                        if (!audioRef.current) return;
                      
                        if (selectedMix?.audio === card.audio) {
                          if (isPlaying) {
                            audioRef.current.pause();
                            setIsPlaying(false);
                          } else {
                            audioRef.current.play();
                            setIsPlaying(true);
                            setHasStartedPlaying(true); // Ensure player becomes visible
                          }
                        } else {
                          setSelectedMix(card);
                          audioRef.current.src = card.audio;
                          audioRef.current
                            .play()
                            .then(() => {
                              setIsPlaying(true);
                              setHasStartedPlaying(true); // Ensure player becomes visible
                            })
                            .catch((error) => console.error("Playback failed:", error));
                        }
                      }}
                    >
                      {selectedMix.audio === card.audio && isPlaying ? (
                        <FaPauseCircle className="text-white text-[60px]" />
                      ) : (
                        <FaPlayCircle className="text-white text-[60px]" />
                      )}
                    </div>
                  </div>
                
                  <div className="mx-2 md:mx-4 mt-1 md:mt-3 md:p-0 p-2">
                    <p className="text-white font-raleway font-bold">{card.name}</p>
                    <p className="md:mt-2 mt-1 text-[#c9c6c6] font-raleway font-bold text-[12px]">
                      {card.artist}
                    </p>
                    <p className="mt-1 md:mt-4 text-[#8c5467]">{card.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixesPage;