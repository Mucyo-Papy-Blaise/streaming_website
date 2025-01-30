import React, { useEffect } from 'react';
import { useAudio } from '../context/AudioContext';
import { FaStepBackward, FaStepForward, FaPlay, FaPause, FaHeart, FaShare, FaDownload } from 'react-icons/fa';

const AudioPlayer: React.FC = () => {
  const {
    isPlaying,
    setIsPlaying,
    selectedMix,
    audioRef,
    progress,
    setProgress,
    currentTime,
    setCurrentTime,
    playNext,
    playPrevious,
    hasStartedPlaying,
    setHasStartedPlaying,
  } = useAudio();

  useEffect(() => {
    if (audioRef.current) {
      const updateProgress = () => {
        if (audioRef.current) {
          const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
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

  useEffect(() => {
    // Reset hasStartedPlaying when a new mix is selected
    setHasStartedPlaying(false);
  }, [selectedMix, setHasStartedPlaying]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      setHasStartedPlaying(true); // Ensures player remains visible after first play
    }
  };

  // Ensure player shows up once hasStartedPlaying is set to true
  if (!hasStartedPlaying && !isPlaying) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[70px] bg-[#000000ae] flex flex-row items-center md:flex-row md:items-center z-50">
      {/* Mix Info */}
      <div className="md:h-20 md:w-[400px] w-[190px] md:mb-6 gap-3 flex flex-row items-center ml-[10px] md:ml-[255px]">
        <div className="bg-white overflow-hidden h-14 w-[50px] md:w-[85px] md:h-20 flex justify-center items-center">
          <img src={selectedMix.image} alt={selectedMix.descr} className="h-full w-full" />
        </div>
        <div className="flex flex-col max-w-[180px] text-[10px] md:text-[14px] md:mt-4">
          <p className="text-white font-raleway font-bold">{selectedMix.name}</p>
          <p className="text-[#fa0153] font-raleway font-bold">
            <span className="text-white">Genre: </span>
            {selectedMix.Genre}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="flex justify-center items-center flex-row gap-4 cursor-pointer">
          <div onClick={playPrevious}>
            <FaStepBackward className="text-white w-4 h-4 hover:text-[#fa0153]" />
          </div>
          <div
            className="flex flex-row bg-white h-6 w-6 rounded-full items-center justify-center cursor-pointer hover:bg-[#fa0153]"
            onClick={handlePlayPause}
          >
            {isPlaying ? <FaPause className="h-2 w-2 text-black" /> : <FaPlay className="h-2 w-2 text-black" />}
          </div>
          <div onClick={playNext}>
            <FaStepForward className="text-white w-4 h-4 hover:text-[#fa0153]" />
          </div>
        </div>

        {/* Progress Bar */}
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

      {/* Action Buttons */}
      <div className="md:ml-20 ml-10 flex justify-center items-center gap-2">
        <FaHeart className="text-white h-3 w-3 md:h-5 md:w-5 cursor-pointer hover:text-[#fa0153]" />
        <FaShare className="text-white h-3 w-3 md:h-5 md:w-5 cursor-pointer hover:text-[#fa0153]" />
        <FaDownload className="text-white h-3 w-3 md:h-5 md:w-5 cursor-pointer hover:text-[#fa0153]" />
      </div>
    </div>
  );
};

export default AudioPlayer;
