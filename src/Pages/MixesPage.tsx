import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/mucyo1.png";
import imageprfl from "../assets/76838388.png";
import mixCover from "../assets/mix cover.webp";
import mixcover2 from '../assets/Cover 10.jpg';
import mixcover3 from '../assets/COVER PHOTO.jpg';
import mixcover4 from '../assets/Cover.jpg';
import mixcover5 from '../assets/image11 small.png';
import mixcover6 from '../assets/image22.webp';
import { useAudio } from '../context/AudioContext';
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
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaShare,
  FaDownload,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import mix1 from '../Audio/MIX VOL 5.mp3';
import mix2 from '../Audio/MIX VOL 3.mp3';
import mix3 from '../Audio/SLOW JAM 2.mp3';
import mix4 from '../Audio/Utah Nice - Single (Official Music Video).mp3';
import mix5 from '../Audio/Ruger, Bnxn - Bae Bae (Official Audio).mp3';
import mix6 from '../Audio/Joé Dwèt Filé - 4 Kampé ( Clip officiel ).mp3';

export const mixCardData = [
  {
    id: 1,
    audio: mix1,
    name: "Street Anthem 3",
    image: mixCover,
    artist: "Mbonyi,Meddy,Adrie,Vestine Na Dorcas",
    descr:
      "Stream And Enjoy These Exclusive African Beats All in one. Remember to like and share.",
    date: "January 20, 2025",
    Genre: "AfroBeat"
  },
  {
    id: 2,
    audio: mix6,
    name: "Street Jam 1",
    image: mixcover3,
    artist: "Jay Z,P.Diddy,Jay Polly,Bull Dog,Rihanna,Bruce Melody",
    descr:
      "Stream And Enjoy These Exclusive African Beats All in one. Remember to like and share.",
    date: "January 20, 2025",
    Genre: "Kompa"
  },
  {
    id: 3,
    audio: mix2,
    name: "FRESH HIT 5",
    image: mixcover2,
    artist: "Alfa Kat,Dj Maphorisa,Kabz De Small,Dj Obza",
    descr:
      "Stream And Enjoy These Exclusive Hip Hop Beats All in one. Remember to like and share.",
    date: "January 20, 2025",
    Genre: "Hip Hop"
  },
  {
    id: 4,
    audio: mix3,
    name: "2024 Afrobeats",
    image: mixcover4,
    artist: "Mbonyi,Meddy,Adrie,Vestine Na Dorcas",
    descr:
      "Bookings:mucyoblaise86@gmail.com Contact:+250786663069",
    date: "January 20, 2025",
    Genre: "Afro Beats"
  },
  {
    id: 5,
    audio: mix4,
    name: "Street Jam 1",
    image: mixcover5,
    artist: "Mbonyi,Meddy,Adrie,Vestine Na Dorcas",
    descr:
      "Stream And Enjoy These Exclusive African Beats All in one. Remember to like and share.",
    date: "January 20, 2025",
    Genre: "Kompa"
  },
  {
    id: 6,
    audio: mix5,
    name: "Best Of 2024 Afrobeats",
    image: mixcover6,
    artist: "The Ben,Diamond Platnmuz,Asake,Kevin Kade",
    descr:
      "Stream And Enjoy These Exclusive African Beats All in one. Remember to like and share.",
    date: "January 20, 2025",
    Genre: "Kompa"
  },
];


const MixesPage: React.FC = () => {
  const {
      isPlaying,
      setIsPlaying,
      selectedMix,
      setSelectedMix,
      audioRef
    } = useAudio();

  const navigate = useNavigate();
  const [isGenreOpen, setIsGenreOpen] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);
  const [currentMixIndex, setCurrentMixIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
      id: 5,
      name: "Electronics",
    },
  ];

  const mixCard = [
    {
      id: 1,
      audio: mix1,
      name: "Street Anthem 3",
      image: mixCover,
      artist: "Mbonyi,Meddy,Adrie,Vestine Na Dorcas",
      descr:
        "Stream And Enjoy These Exclusive African Beats All in one. Remember to like and share.",
      date: "January 20, 2025",
      Genre: "AfroBeat"
    },
    {
      id: 2,
      audio: mix6,
      name: "Street Jam 1",
      image: mixcover3,
      artist: "Jay Z,P.Diddy,Jay Polly,Bull Dog,Rihanna,Bruce Melody",
      descr:
        "Stream And Enjoy These Exclusive African Beats All in one. Remember to like and share.",
      date: "January 20, 2025",
      Genre: "Kompa"
    },
    {
      id: 3,
      audio: mix2,
      name: "FRESH HIT 5",
      image: mixcover2,
      artist: "Alfa Kat,Dj Maphorisa,Kabz De Small,Dj Obza",
      descr:
        "Stream And Enjoy These Exclusive Hip Hop Beats All in one. Remember to like and share.",
      date: "January 20, 2025",
      Genre: "Hip Hop"
    },
    {
      id: 4,
      audio: mix3,
      name: "Best Of 2024 Afrobeats",
      image: mixcover4,
      artist: "Mbonyi,Meddy,Adrie,Vestine Na Dorcas",
      descr:
        "Bookings:mucyoblaise86@gmail.com Contact:+250786663069",
      date: "January 20, 2025",
      Genre: "Afro Beats"
    },
    {
      id: 5,
      audio: mix4,
      name: "Street Jam 1",
      image: mixcover5,
      artist: "Mbonyi,Meddy,Adrie,Vestine Na Dorcas",
      descr:
        "Stream And Enjoy These Exclusive African Beats All in one. Remember to like and share.",
      date: "January 20, 2025",
      Genre: "Kompa"
    },
    {
      id: 6,
      audio: mix5,
      name: "Best Of 2024 Afrobeats",
      image: mixcover6,
      artist: "The Ben,Diamond Platnmuz,Asake,Kevin Kade",
      descr:
        "Stream And Enjoy These Exclusive African Beats All in one. Remember to like and share.",
      date: "January 20, 2025",
      Genre: "Kompa"
    },
  ];

  const handleGenre = () => {
    setIsGenreOpen((prevState) => !prevState);
  };

  const playNext = () => {
    const nextIndex = (currentMixIndex + 1) % mixCard.length;
    const nextMix = mixCard[nextIndex];
    setSelectedMix(nextMix);
    setCurrentMixIndex(nextIndex);
    if (audioRef.current) {
      audioRef.current.src = nextMix.audio;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const playPrevious = () => {
    const prevIndex = (currentMixIndex - 1 + mixCard.length) % mixCard.length;
    const prevMix = mixCard[prevIndex];
    setSelectedMix(prevMix);
    setCurrentMixIndex(prevIndex);
    if (audioRef.current) {
      audioRef.current.src = prevMix.audio;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      const updateProgress = () => {
        if (audioRef.current) {
          const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
          setProgress(currentProgress || 0);
          setCurrentTime(audioRef.current.currentTime);
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

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   return (
    <div className="flex min-h-screen w-full bg-[#161720] relative">
      <audio ref={audioRef} />

      {/* Mobile Menu Button */}
      <div className="block md:hidden fixed top-4 left-4 z-50">
        <button 
          className="text-white text-2xl p-2 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes/> : <FaBars/>}
        </button>
      </div>

      {/* Left NavBar - Made independently scrollable */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block md:w-[250px] min-w-[250px] h-screen fixed md:sticky top-0 left-0 bg-[#161720] z-40 border-r-2 border-[#ffffff32] overflow-y-auto`}>
        <div className="p-10 pb-20">
          <div onClick={() => navigate("/LandingPage")}>
            <img
              src={logo}
              alt="logo"
              className="w-[60px] md:w-[108px] mt-4 md:mt-6 cursor-pointer"
            />
          </div>

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

          <div className="mt-10 flex flex-row mr-4 gap-3 text-[#767575] cursor-pointer hover:text-[#fa0153]">
            <FaSignOutAlt className="text-[18px] mt-[2px]" />
            <h2 className="font-raleway text-[17px] font-bold">Log Out</h2>
          </div>
        </div>
      </div>

      {/* Right Content - Made independently scrollable */}
      <div className="flex-1 min-h-screen">
        <div className="h-full overflow-y-auto pb-[90px]"> {/* Added padding bottom to account for player */}
          <div className="p-3 md:p-8 md:mt-0 mt-10">
            {/* Search and profile section */}
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

            {/* Selected mix details */}
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

            {/* Mix cards grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-2">
              {mixCard.map((card) => (
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
                      className="absolute top-[50%]  md:top-[30%] left-1/2  md:left-1/2 transform  md:transform -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 md:-translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (selectedMix.audio === card.audio && isPlaying) {
                          audioRef.current?.pause();
                          setIsPlaying(false);
                        } else {
                          setSelectedMix(card);
                          if (audioRef.current) {
                            audioRef.current.src = card.audio;
                            audioRef.current.play();
                            setIsPlaying(true);
                          }
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
      
      {/* Progress bar - Fixed at bottom */}
      {selectedMix.name && (
        <div className="fixed bottom-0 left-0 right-0 h-[70px] bg-[#000000ae] flex flex-row items-center md:flex-row md:items-center z-50">
          {/* Selected mix details On Playing Bar*/}
          <div className="md:h-20 md:w-[400px] w-[190px] md:mb-6 gap-3 flex flex-row items-center ml-[10px] md:ml-[255px]">
            <div className="bg-white overflow-hidden h-14 w-[50px] md:w-[85px] md:h-20 flex justify-center items-center">
              <img
                src={selectedMix.image}
                alt={selectedMix.descr}
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-col max-w-[180px] text-[10px] md:text-[14px] md:mt-4">
              <p className="text-white font-raleway font-bold">{selectedMix.name}</p>
              <p className="text-[#fa0153] font-raleway font-bold">
                <span className="text-white">Genre: </span>
                {selectedMix.Genre}
              </p>
            </div>
          </div>

          {/* Playback controls and progress bar */}
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="flex justify-center items-center flex-row gap-4 cursor-pointer">
              <div onClick={playPrevious}>
                <FaStepBackward className="text-white w-4 h-4 hover:text-[#fa0153]" />
              </div>
              <div
                className="flex flex-row bg-white h-6 w-6 rounded-full items-center justify-center cursor-pointer hover:bg-[#fa0153]"
                onClick={() => {
                  if (isPlaying) {
                    audioRef.current?.pause();
                    setIsPlaying(false);
                  } else {
                    audioRef.current?.play();
                    setIsPlaying(true);
                  }
                }}
              >
                {isPlaying ? (
                  <FaPause className="h-2 w-2 text-black" />
                ) : (
                  <FaPlay className="h-2 w-2 text-black" />
                )}
              </div>
              <div onClick={playNext}>
                <FaStepForward className="text-white w-4 h-4 hover:text-[#fa0153]" />
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-3">
              <div className="hidden md:block">
                <p className="text-white font-medium font-raleway text-[15px]">{formatTime(currentTime)}</p>
              </div>
              <div
                className="w-[100px] md:w-[600px] h-1 bg-[#444] rounded-full cursor-pointer"
                onClick={(e) => {
                  const bar = e.currentTarget;
                  const clickPosition = e.nativeEvent.offsetX;
                  const newTime = (clickPosition / bar.offsetWidth) * (audioRef.current?.duration || 0);
                  if (audioRef.current) {
                    audioRef.current.currentTime = newTime;
                  }
                }}
              >
                <div
                  style={{ width: `${progress}%` }}
                  className="h-1 bg-[#ffffff] rounded-full hover:bg-[#fa0153]"
                />
              </div>
              <div className="hidden md:block">
                <p className="text-white font-medium font-raleway text-[15px]">
                  {formatTime(audioRef.current?.duration || 0)}
                </p>
              </div>
            </div>
          </div>

          {/* Like, Share and Download Icon */}
          <div className="md:ml-20 ml-10 flex justify-center items-center gap-2 md:gap-">
            <FaHeart className="text-white h-3 w-3 md:h-5 md:w-5 cursor-pointer hover:text-[#fa0153]"/>
            <FaShare className="text-white h-3 w-3 md:h-5 md:w-5 cursor-pointer hover:text-[#fa0153]"/>
            <FaDownload className="text-white h-3 w-3 md:h-5 md:w-5 cursor-pointer hover:text-[#fa0153]"/>
          </div>
        </div>   
      )}
    </div>
  );
};

export default MixesPage;