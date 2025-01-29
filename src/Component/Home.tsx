import React, { useState } from "react";
import image2 from "../assets/image11.webp";
import small from "../assets/image11 small.png";
import medium from "../assets/image11 small.png";
import sticker1 from "../assets/boombox.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import {
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaPlayCircle,
  FaTimes,
  FaPauseCircle,
} from "react-icons/fa";
import { useRef } from "react";
import NavBar from "./NavBar";
import profilePic from "../assets/76838388.png";
import { useNavigate } from "react-router-dom";
import { mixCardData } from "../Pages/MixesPage";
import { useAudio } from "../context/AudioContext";
import AudioPlayer from "./AudioPlayer";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isPlaying, setIsPlaying, selectedMix, setSelectedMix, audioRef } =
    useAudio();

  const [activeSection, setActiveSection] = useState<string>("");
  const toggleSection = (section: string) => {
    setActiveSection((prev) => (prev === section ? "" : section));
  };

  const mixCard = mixCardData.slice(0, 4);

  const scrollRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1025 });

  const getBackgroundImage = () => {
    if (isSmallScreen) return `url(${small})`;
    if (isMediumScreen) return `url(${medium})`;
    if (isLargeScreen) return `url(${image2})`;
    return `url(${image2})`;
  };

  return (
    <div>
      <AudioPlayer />
      <audio ref={audioRef} />
      <NavBar
        onContactClick={() => toggleSection("Contact")}
        onAboutClick={() => toggleSection("About")}
        onHomeClick={() => toggleSection("Home")}
      />

      <div
        className="min-h-screen w-full lg:bg-cover md:bg-contain  bg-auto flex flex-col items-start text-center lg:pt-[150px] md:pt-[150px] pt-[130px]"
        style={{
          backgroundImage: getBackgroundImage(),
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col lg:mx-40 md:mx-32 mx-10 lg:gap-[35px] md:gap-[35px] gap-[35px]">
          <h1 className="font-raleway font-bold text-white text-start text-[30px]">
            <span className="text-[#fa0153]">DEEJAY</span> MUCYO
          </h1>
          <p className="font-raleway font-light text-white text-start text-[20px] max-w-[500px]">
            Welcome to my world of music! I'm DJ Mucyo, blending beats and
            creating unforgettable vibes. Let's turn up the volume!
          </p>

          <div className="flex flex-row gap-4">
            <div className="border-2 border-[#fa0153] rounded-lg p-2 w-8 h-8 flex justify-center items-center cursor-pointer">
              <Link to="/">
                <FontAwesomeIcon
                  icon={faMusic}
                  className="text-white hover:text-[#fa0153]"
                />
              </Link>
            </div>
            <div className="border-2 border-[#fa0153] rounded-lg p-2 w-8 h-8 flex justify-center items-center cursor-pointer">
              <Link to="/">
                <FaInstagram className="text-white hover:text-[#fa0153]" />
              </Link>
            </div>
            <div className="border-2 border-[#fa0153] rounded-lg p-2 w-8 h-8 flex justify-center items-center cursor-pointer">
              <Link to="/">
                <FaTwitter className="text-white hover:text-[#fa0153]" />
              </Link>
            </div>
            <div className="border-2 border-[#fa0153] rounded-lg p-2 w-8 h-8 flex justify-center items-center cursor-pointer">
              <Link to="/">
                <FaTiktok className="text-white hover:text-[#fa0153]" />
              </Link>
            </div>
            <div className="border-2 border-[#fa0153] rounded-lg p-2 w-8 h-8 flex justify-center items-center cursor-pointer">
              <Link to="/">
                <FaYoutube className="text-white hover:text-[#fa0153]" />
              </Link>
            </div>
          </div>
        </div>

        {/* New Mix */}
        <div className="mt-8  lg:mx-40 md:mx-32 mx-8">
          <h1 className="text-start mb-4 font-raleway font-[300px] text-[20px] text-white">
            NEW MIXES
          </h1>
          <div className="relative flex items-center">
            {/* Left Arrow */}
            <FaArrowCircleLeft
              onClick={slideLeft}
              className="absolute -left-6  w-4 h-4 cursor-pointer text-white hover:text-[#fa0153]"
            />

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4  overflow-y-auto no-scrollbar scroll-smooth"
              style={{ maxWidth: "330px" }}
            >
              {mixCard.map((card) => (
                <div
                  key={card.id}
                  className="bg-black rounded-lg shadow-lg overflow-hidden cursor-pointer group"
                  style={{
                    minWidth: "150px",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="object-cover w-[150px] h-[200px] opacity-[100%] hover:opacity-[60%]"
                  />

                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    onClick={() => {
                      if (!audioRef.current) return;

                      if (selectedMix?.audio === card.audio) {
                        if (isPlaying) {
                          audioRef.current.pause();
                          setIsPlaying(false);
                        } else {
                          audioRef.current.play();
                          setIsPlaying(true);
                        }
                      } else {
                        setSelectedMix(card);
                        audioRef.current.src = card.audio;
                        audioRef.current
                          .play()
                          .then(() => setIsPlaying(true))
                          .catch((error) =>
                            console.error("Playback failed:", error)
                          );
                      }
                    }}
                  >
                    {selectedMix?.audio === card.audio && isPlaying ? (
                      <FaPauseCircle className="text-white text-[40px] cursor-pointer" />
                    ) : (
                      <FaPlayCircle className="text-white text-[40px] cursor-pointer" />
                    )}
                  </div>

                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#09173c] w-full p-2 ">
                    <h1 className="text-white font-raleway font-bold text-[14px]">
                      {card.name}
                    </h1>
                  </div>

                  <div className="absolute top-[185px] left-16 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="text-[#09173c] font-raleway font-medium text-[10px] bg-white p-1 rounded-lg">
                      {card.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Scroll */}
            <FaArrowCircleRight
              onClick={slideRight}
              className="absolute lg:right-[-20px] md:right-[-20px] right-[-20px] w-4 h-4 cursor-pointer text-white hover:text-[#fa0153]"
            />
          </div>
          <div className="mt-5">
            <button
              onClick={() => navigate("/MixesPage")}
              className="bg-[#fa0153] text-white font-bold font-raleway p-2 w-[310px] hover:bg-[#c14e74] rounded"
            >
              More Mixes
            </button>
          </div>
        </div>
      </div>

      {/* Home Section */}
      <div
        className={`${
          activeSection === "Contact" ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      ></div>

      {/* Contact Panel */}
      <div
        className={`fixed top-[50px] md:top-[80px] right-0 h-full w-[420px] md:w-[400px] bg-[#09173c] md:bg-[#09173cc7] text-white shadow ${
          activeSection === "Contact" ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-6 w-52 h-52 ml-24">
          <img src={sticker1} alt="sticker" />
        </div>
        <div className="p-6">
          <h2 className="font-bold font-raleway text-[20px] text-[#fa0153] text-center">
            Connect With Me
          </h2>
          <h1 className="mt-4 font-normal font-raleway text-[15px] text-center">
            We'd Love to hear from you...! <br /> Feel free to reach out
          </h1>

          <form action="" className="mt-4 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-2 outline-none text-black font-raleway rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 outline-none text-black font-raleway rounded"
            />
            <textarea
              name=""
              id=""
              placeholder="Your Message"
              className="p-2 outline-none text-black font-raleway font-medium rounded"
            ></textarea>

            <button className="p-2 text-[15px] font-bold font-raleway bg-[#fa0153] hover:bg-[#d01444] rounded">
              Send
            </button>
          </form>
          <button
            onClick={() => toggleSection("Contact")}
            className="absolute top-4 right-4 text-white text-xl cursor-pointer"
          >
            <FaTimes className="hover:text-[#fa0153]" />
          </button>
        </div>
      </div>

      {/* About */}

      <div
        className={`fixed top-[50px] md:top-[80px] right-0 h-full w-[420px] md:w-[400px] bg-[#09173c] md:bg-[#09173cc7] text-white shadow flex flex-col ${
          activeSection === "About" ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="bg-white w-32 h-32 rounded-[50%] overflow-hidden mt-5 ml-[110px]">
          <img
            src={profilePic}
            alt="My Profile pic "
            className="object-cover"
          />
        </div>
        <div className="max-w-[300px] ml-[30px] mt-5 overflow-y-auto scrollbar-thumb-[#fa0153] scrollbar-track-[#161720] ">
          <h1 className="text-center font-raleway font-bold text-[20px]">
            Welcome to <span className="text-[#fa0153]">DEEJAY MUCYO</span>{" "}
            World of Mixes and Creativity!{" "}
          </h1>

          <p className="ml-[10px] font-raleway mt-5">
            I’m Mucyo Bruce, a passionate DJ and graphic designer dedicated to
            creating unforgettable experiences. With 4 years of DJing expertise,
            I specialize in crafting acid music mixes and live recording sets,
            all available for your listening pleasure on Audiomack.
          </p>

          <p className="ml-[10px] font-raleway mt-3">
            Whether it’s a house party, wedding, birthday, or corporate event,
            I’ll bring the perfect vibe to your occasion.
          </p>

          <p className="ml-[10px] font-raleway mt-3">
            Beyond the decks, I channel my creativity into graphic design with 5
            years of experience, delivering stunning visuals that captivate and
            inspire.
          </p>

          <p className="ml-[10px] font-raleway mt-3">
            Let’s make magic together—on the dance floor or through dynamic
            designs!
          </p>
        </div>
        <button
          onClick={() => toggleSection("About")}
          className="absolute top-4 right-4 text-white text-xl"
        >
          <FaTimes className="hover:text-[#fa0153]" />
        </button>
      </div>
    </div>
  );
};

export default Home;
