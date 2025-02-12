import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

// Define the mix data type
interface Mix {
  id: number;
  audio: string;
  name: string;
  image: string;
  artist: string;
  descr: string;
  date: string;
  Genre: string;
}

interface AudioContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  currentMixIndex: number;
  setCurrentMixIndex: (index: number) => void;
  selectedMix: Mix;
  setSelectedMix: (mix: Mix) => void;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  progress: number;
  setProgress: (progress: number) => void;
  currentTime: number;
  setCurrentTime: (time: number) => void;
  playNext: () => void;
  playPrevious: () => void;
  mixCardData: Mix[];
  hasStartedPlaying: boolean;
  setHasStartedPlaying: (started: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

// Import mix data from a separate file
import { mixCardData } from '../Data/mixData';

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMixIndex, setCurrentMixIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedMix, setSelectedMix] = useState<Mix>(mixCardData[0]);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio();
    audio.addEventListener('ended', playNext);
    audioRef.current = audio;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', playNext);
        audioRef.current = null;
      }
    };
  }, []);

  const playNext = () => {
    const nextIndex = (currentMixIndex + 1) % mixCardData.length;
    const nextMix = mixCardData[nextIndex];
    setSelectedMix(nextMix);
    setCurrentMixIndex(nextIndex);
    if (audioRef.current) {
      audioRef.current.src = nextMix.audio;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasStartedPlaying(true);
        })
        .catch(error => console.error("Playback failed:", error));
    }
  };

  const playPrevious = () => {
    const prevIndex = (currentMixIndex - 1 + mixCardData.length) % mixCardData.length;
    const prevMix = mixCardData[prevIndex];
    setSelectedMix(prevMix);
    setCurrentMixIndex(prevIndex);
    if (audioRef.current) {
      audioRef.current.src = prevMix.audio;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasStartedPlaying(true);
        })
        .catch(error => console.error("Playback failed:", error));
    }
  };

  return (
    <AudioContext.Provider
      value={{
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
        playNext,
        playPrevious,
        mixCardData,
        hasStartedPlaying,
        setHasStartedPlaying
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};