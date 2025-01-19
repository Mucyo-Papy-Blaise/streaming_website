import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/mucyo1.png";
import imageprfl from "../assets/76838388.png";
import mixCover from "../assets/mix cover.webp";
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
} from "react-icons/fa";
import nairobi from "../assets/Marioo feat Bien - Nairobi (Track No.4).mp3";
import Kampe from "../assets/Joé Dwèt Filé - 4 Kampé ( Clip officiel ).mp3"
const MixesPage: React.FC = () => {
  const navigate = useNavigate();
  const [isGenreOpen, setIsGenreOpen] = useState<boolean>(false);
  // Add new states for audio functionality
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [selectedMix, setSelectedMix] = useState<{
    name: string;
    descr: string;
    artist: string;
    audio: string;
  }>({
    name: "",
    descr: "",
    artist: "",
    audio: "",
  });

  // Keep all your original arrays exactly as they were
  const recomend = [
    {
      id: 1,
      icon: <FaHome />,
      name: "Feed",
    },
    {
      id: 2,
      icon: <FaClock />,
      name: "Recents",
    },
    {
      id: 3,
      icon: <FaMusic />,
      name: "Acid Mixes",
    },
    {
      id: 4,
      icon: <FaBroadcastTower />,
      name: "Live Mix",
    },
  ];

  const yourMusic = [
    {
      id: 1,
      icon: <FaHeart />,
      name: "Favourite",
    },
    {
      id: 2,
      icon: <FaListUl />,
      name: "PlayList",
    },
  ];

  const genre = [
    {
      id: 1,
      name: "All Genre",
    },
    {
      id: 2,
      name: "AfroBeats",
    },
    {
      id: 3,
      name: "Hip Hop",
    },
    {
      id: 4,
      name: "Gospel",
    },
    {
      id: 1,
      name: "Electronics",
    },
    {
      id: 1,
      name: "Rock & Pop",
    },
  ];

  const mixCard = [
    {
      id: 1,
      audio: nairobi,
      name: "Street Jam 1",
      image: mixCover,
      artist: "Israel Mbonyi,Meddy,Adrie,Vestine Na Dorcas",
      descr:
        "Stream And Enjoy These Exclusive African Beats All in one. Remember to like and share.",
      date: "January 20, 2025",
    },
    {
      id: 2,
      audio: Kampe,
      name: "Street Jam 1",
      image: mixCover,
      artist: "Israel Mbonyi,Meddy,Adrie,Vestine Na Dorcas",
      descr:
        "Stream And Enjoy These Exclusive African Beats All in one. Remember to like and share.",
      date: "January 20, 2025",
    },
   
  ];

  const handleGenre = () => {
    setIsGenreOpen((prevState) => !prevState);
  };

  const handleMixClick = (mix: any) => {
    if (selectedMix.audio === mix.audio && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false); 
      setSelectedMix({ name: "", descr: "", artist: "", audio: "" });
    } else {
      setSelectedMix(mix);
      if (audioRef.current && mix.audio) {
        audioRef.current.src = mix.audio;
        audioRef.current.play();
        setIsPlaying(true); // Set to playing state
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      const updateProgress = () => {
        if (audioRef.current) {
          const currentProgress =
            (audioRef.current.currentTime / audioRef.current.duration) * 100;
          setProgress(currentProgress || 0);
        }
      };
      audioRef.current.addEventListener("timeupdate", updateProgress);
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener("timeupdate", updateProgress);
        }
      };
    }
  }, []);
  

  return (
    <div className="min-h-screen w-full flex flex-row bg-[#161720]">
      <audio ref={audioRef} />

      {/* Left NavBar - Keep exactly as it was */}
      <div className="md:min-w-[250px] max-w-[150px] p-4 h-screen sticky top-0 border-r-2 border-[#ffffff32] overflow-y-auto scrollbar-thumb-[#fa0153] scrollbar-track-[#161720] scrollbar-thin left-0 flex flex-col items-start md:items-center">
        <div onClick={() => navigate("/LandingPage")}>
          <img
            src={logo}
            alt="logo"
            className="w-[60px] md:w-[108px] mt-4 md:mt-6 cursor-pointer"
          />
        </div>

        <div className="md:mt-10 mt-4">
          {recomend.map((reco) => (
            <div
              key={reco.id}
              className="mt-4 flex flex-row gap-3 text-white cursor-pointer hover:text-[#fa0153]"
            >
              <h2 className="text-[18px] mt-[2px]">{reco.icon}</h2>
              <h2 className="font-raleway text-[17px]">{reco.name}</h2>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h1 className="font-raleway font-thin text-[20px] text-white">
            Your Music
          </h1>

          {yourMusic.map((your) => (
            <div
              key={your.id}
              className="mt-6 flex flex-row gap-3 text-white cursor-pointer hover:text-[#fa0153]"
            >
              <h2 className="text-[18px] mt-[2px]">{your.icon}</h2>
              <h2 className="font-raleway text-[17px]">{your.name}</h2>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h1
            onClick={handleGenre}
            className="font-raleway font-thin text-[20px] text-white mr-6 flex flex-row justify-center items-center gap-1"
          >
            {isGenreOpen ? (
              <FaChevronUp className="text[15px]" />
            ) : (
              <FaChevronDown className="text[15px] text-[#fa0153]" />
            )}
            Genres
          </h1>
          {isGenreOpen && (
            <div className="mt-0 p-4 w-26 h-full rounded-md bg-[#323232]">
              {genre.map((gen) => (
                <div
                  key={gen.id}
                  className="flex flex-row gap-3 text-white cursor-pointer hover:text-[#fa0153]"
                >
                  <h2 className="font-raleway text-[17px]">{gen.name}</h2>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-row mr-4 gap-3 text-[#767575] cursor-pointer hover:text-[#fa0153]">
          <FaSignOutAlt className="text-[18px] mt-[2px]" />
          <h2 className="font-raleway text-[17px] font-bold">Log Out</h2>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-grow p-8 overflow-y-auto scrollbar-thumb-[#fa0153] scrollbar-track-[#161720] scrollbar-thin">
        {/* Search and profile section */}
        <div className="relative flex flex-row items-center gap-4">
          <FaSearch className="absolute ml-4 text-white text-xl font-thin" />
          <input
            type="text"
            placeholder="Artist, Mix Name, Genre"
            className="bg-[#3e3e3ed8] pl-12  p-2 w-[1000px] h-[50px] rounded-lg outline-none border-none text-white font-raleway"
          />

          <div className="relative cursor-pointer">
            <FaBell className=" text-white text-[23px] ml-4 hover:text-[#fa0153]" />
            <div className="absolute w-5 h-5 -top-3 -right-1 bg-[#fa0153] rounded-lg flex justify-center items-center font-raleway text-[12px] font-bold text-white p-2">
              15
            </div>
          </div>

          <div className="w-12 h-12 ml-4 rounded-full bg-white overflow-hidden">
            <img src={imageprfl} alt="ProfileCircle" className="object-cover" />
          </div>
          <button
            className="w-[150px] h-[40px] text-white text-[15px] font-bold bg-[#fa0153] hover:bg-[#c46182] ml-4 rounded"
            onClick={() => navigate("/LandingPage")}
          >
            Back To Home
          </button>
        </div>

        {/* Selected mix details and progress bar */}
        <div className="mt-10 min-h-[150px]">
          {selectedMix.name ? (
            <div className="">
              <p className="font-raleway font-bold text-[25px] text-white">
                {selectedMix.name}
              </p>
              <p className="max-w-[450px] text-[#fffb] font-raleway mt-3">
                {selectedMix.descr}
              </p>
              <p className="mt-3 text font-raleway text-[#744753] max-w-[450px] text-center rounded bg-[#d7d7d7] p-1">
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

        {/* Mix cards grid */}
        <div className="mt-10 grid grid-cols-5 gap-5">
          {mixCard.map((card) => (
            <div
            key={card.id}
            onClick={() => handleMixClick(card)}
            className={`relative w-[230px] h-[330px] bg-[#323232] rounded-sm shadow-sm pt-1 group transition duration-200 ease-out ${
              selectedMix.audio === card.audio && isPlaying ? "scale-105" : "" // Apply scale only to the currently playing mix
            }`}
          >
            <div className="bg-[#323232] w-[200px] h-[200px] overflow-hidden rounded-md mx-4 cursor-pointer">
              <img
                src={card.image}
                alt={card.name}
                className="object-cover w-full h-full rounded-md hover:opacity-[60%]"
              />
              <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {selectedMix.audio === card.audio && isPlaying ? (
                  <FaPauseCircle className="text-white text-[60px]" /> // Show pause if the track is playing
                ) : (
                  <FaPlayCircle className="text-white text-[60px]" /> // Show play icon if the track is paused or not selected
                )}
              </div>
            </div>
          
            <div className="mx-4 mt-3">
              <p className="text-white font-raleway font-bold ">{card.name}</p>
              <p className="mt-2 text-[#c9c6c6] font-raleway font-bold text-[12px]">
                {card.artist}
              </p>
              <p className="mt-4 text-[#8c5467]">{card.date}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
      {/* Progress bar */}
      <div className="fixed mt-4 bottom-0 h-[50px] w-full bg-[#000000ae] flex justify-center items-center">
        <div className="w-[600px] h-2 bg-[#444] rounded-full">
          <div
            style={{ width: `${progress}%` }}
            className="h-2 bg-[#ffffff] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MixesPage;
