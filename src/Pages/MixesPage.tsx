import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/mucyo1.png";
import imageprfl from "../assets/76838388.png";
import mixCover from "../assets/mix cover.webp";
import mixcover2 from '../assets/Cover 10.jpg'
import mixcover3 from '../assets/COVER PHOTO.jpg'
import mixcover4 from '../assets/Cover.jpg'
import mixcover5 from '../assets/image11 small.png'
import mixcover6 from '../assets/image22.webp'
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
} from "react-icons/fa";
import mix1 from '../Audio/MIX VOL 5.mp3'
import mix2 from  '../Audio/MIX VOL 3.mp3'
import mix3 from '../Audio/SLOW JAM 2.mp3'
import mix4 from '../Audio/Utah Nice - Single (Official Music Video).mp3'
import mix5 from '../Audio/Ruger, Bnxn - Bae Bae (Official Audio).mp3'
import mix6 from '../Audio/Joé Dwèt Filé - 4 Kampé ( Clip officiel ).mp3'


const MixesPage: React.FC = () => {
  const navigate = useNavigate();
  const [isGenreOpen, setIsGenreOpen] = useState<boolean>(false);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentMixIndex, setCurrentMixIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedMix, setSelectedMix] = useState<{
    image:string,
    name: string;
    descr: string;
    artist: string;
    audio: string;
    Genre:string;
  }>({
    image:"",
    name: "",
    descr: "",
    artist: "",
    audio: "",
    Genre: "",
  });

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
      Genre:"AfroBeat"
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
      Genre:"Kompa"
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
      Genre:"Hip Hop"
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
      Genre:"Afro Beats"
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
      Genre:"Kompa"
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
      Genre:"Kompa"
    },
   
  ];

  const handleGenre = () => {
    setIsGenreOpen((prevState) => !prevState);
  };

  // const handleMixClick = (mix: any) => {
  //   if (selectedMix.audio === mix.audio && isPlaying) {
  //     audioRef.current?.pause();
  //     setIsPlaying(false); 
  //     setSelectedMix({ name: "", descr: "", artist: "", audio: "" , image:"",Genre:""});
  //   } else {
  //     setSelectedMix(mix);
  //     if (audioRef.current && mix.audio) {
  //       audioRef.current.src = mix.audio;
  //       audioRef.current.play();
  //       setIsPlaying(true); 
  //     }
  //   }
  // };

  const playNext = () => {
    const nextIndex = (currentMixIndex + 1) % mixCard.length; // Cycle to the next mix
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
    const prevIndex =
      (currentMixIndex - 1 + mixCard.length) % mixCard.length; // Cycle to the previous mix
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
          const currentProgress =
            (audioRef.current.currentTime / audioRef.current.duration) * 100;
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

  return (
    <div className="min-h-screen w-full flex flex-row bg-[#161720]">
      <audio ref={audioRef} />

      {/* Left NavBar - Keep exactly as it was */}
      <div className="md:min-w-[250px] max-w-[150px] p-4 pb-20 h-screen sticky top-0 border-r-2 border-[#ffffff32] overflow-y-auto scrollbar-thumb-[#fa0153] scrollbar-track-[#161720] scrollbar-thin left-0 flex flex-col items-start md:items-center">
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
            >
              <h2 className="text-[18px] mt-[2px]">{your.icon}</h2>
              <h2 className="font-raleway text-[17px]">{your.name}</h2>
            </div>
          ))}
        </div>

        <div className="mt-6">
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
            <div className="mt-0 p-2 w-26  h-full rounded-md bg-[#323232]">
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
            <div className="max-w-[450px]">
              <p className="font-raleway font-bold text-[25px] text-white">
                {selectedMix.name}
              </p>
              <p className=" text-[#fffb] font-raleway mt-3">
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
        <div className="mt-10 pb-20 grid grid-cols-5 gap-5">
          {mixCard.map((card) => (
            <div
            key={card.id}
            className={`relative w-[230px] h-[330px] bg-[#323232] rounded-sm shadow-sm pt-1 group transition duration-200 ease-out ${
              selectedMix.audio === card.audio ? "scale-105 bg-[#514545]" : ""
            }`}
          >
            <div className="bg-[#323232] w-[200px] h-[200px] overflow-hidden rounded-md mx-4 cursor-pointer">
              <img
                src={card.image}
                alt={card.name}
                className="object-cover w-full h-full rounded-md hover:opacity-[60%]"
              />
              <div
                className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
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
          
            <div className="mx-4 mt-3">
              <p className="text-white font-raleway font-bold">{card.name}</p>
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
        {selectedMix.name ? (
          <div className="fixed mt-2 bottom-0 h-[70px] w-full bg-[#000000ae] flex items-center">
      <>
      {/* Selected mix details */}
      <div className="h-20 w-[400px] mb-6 gap-3 flex flex-row items-center ml-[255px]">
        <div className="bg-white overflow-hidden w-[85px] h-20">
          <img
            src={selectedMix.image}
            alt={selectedMix.descr}
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col max-w-[120px] text-[14px] mt-4">
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
        <div>
          <p className="text-white font-medium font-raleway  text-[15px]"> {formatTime(currentTime)}</p>
      </div>
      <div
                className="w-[600px] h-1 bg-[#444] rounded-full cursor-pointer"
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
            className="h-1 bg-[#ffffff] rounded-full hover:bg-[#fa0153] "
          />
        </div>
        <div>
        <div>
        <p className="text-white font-medium font-raleway text-[15px]">
                  {formatTime(audioRef.current?.duration || 0)}
                </p>
      </div>
        </div>
      </div>
      </div>
      
    </>
    </div>   
  ) : null} 
      
    </div>
  );
};

export default MixesPage;
