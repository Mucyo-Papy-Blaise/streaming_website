import React, { useEffect } from 'react';
import { useAudio } from '../context/AudioContext';
import { mixCardData } from '../Pages/MixesPage';
import {
  FaStepBackward,
  FaStepForward,
  FaPlay,
  FaPause,
  FaHeart,
  FaShare,
  FaDownload,
} from 'react-icons/fa';

const AudioPlayer: React.FC = () => {
  const {
    isPlaying,
    setIsPlaying,
    currentMixIndex,
    setCurrentMixIndex,
    selectedMix,
    setSelectedMix,
    audioRef,
    progress,
    setProgress,
    currentTime,
    setCurrentTime,
  } = useAudio();

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
      audioRef.current.addEventListener('timeupdate', updateProgress);
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', updateProgress);
        }
      };
    }
  }, [setProgress, setCurrentTime]);

  const playNext = () => {
    const nextIndex = (currentMixIndex + 1) % mixCardData.length;
    const nextMix = mixCardData[nextIndex];
    setSelectedMix(nextMix);
    setCurrentMixIndex(nextIndex);
    if (audioRef.current) {
      audioRef.current.src = nextMix.audio;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const playPrevious = () => {
    const prevIndex = (currentMixIndex - 1 + mixCardData.length) % mixCardData.length;
    const prevMix = mixCardData[prevIndex];
    setSelectedMix(prevMix);
    setCurrentMixIndex(prevIndex);
    if (audioRef.current) {
      audioRef.current.src = prevMix.audio;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  if (!selectedMix.name) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[70px] bg-[#000000ae] flex flex-row items-center md:flex-row md:items-center z-50">
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

      <div className="flex flex-col justify-center items-center gap-1">
        <div className="flex justify-center items-center flex-row gap-4 cursor-pointer">
          <div onClick={playPrevious}>
            <FaStepBackward className="text-white w-4 h-4 hover:text-[#fa0153]" />
          </div>
          <div
  className="flex flex-row bg-white h-6 w-6 rounded-full items-center justify-center cursor-pointer hover:bg-[#fa0153]"
  onClick={() => {
    if (!audioRef.current) {
      console.error("Audio element is not initialized.");
      return;
    }

    if (selectedMix?.audio) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        if (audioRef.current.src !== selectedMix.audio) {
          audioRef.current.src = selectedMix.audio; // Ensure correct source
        }
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error("Playback failed:", err));
      }
    } else {
      console.error("No mix selected!");
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
            <p className="text-white font-medium font-raleway text-[15px]">
              {formatTime(currentTime)}
            </p>
          </div>
          <div
            className="w-[100px] md:w-[600px] h-1 bg-[#444] rounded-full cursor-pointer"
            onClick={(e) => {
              const bar = e.currentTarget;
              const clickPosition = e.nativeEvent.offsetX;
              const newTime =
                (clickPosition / bar.offsetWidth) *
                (audioRef.current?.duration || 0);
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

      <div className="md:ml-20 ml-10 flex justify-center items-center gap-2 md:gap-">
        <FaHeart className="text-white h-3 w-3 md:h-5 md:w-5 cursor-pointer hover:text-[#fa0153]" />
        <FaShare className="text-white h-3 w-3 md:h-5 md:w-5 cursor-pointer hover:text-[#fa0153]" />
        <FaDownload className="text-white h-3 w-3 md:h-5 md:w-5 cursor-pointer hover:text-[#fa0153]" />
      </div>
    </div>
  );
};

export default AudioPlayer;