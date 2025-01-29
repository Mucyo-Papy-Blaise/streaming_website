import React, { createContext, useContext, useState, useRef } from 'react';
import { mixCardData } from '../Pages/MixesPage';

interface AudioContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  currentMixIndex: number;
  setCurrentMixIndex: (index: number) => void;
  selectedMix: {
    image: string;
    name: string;
    descr: string;
    artist: string;
    audio: string;
    Genre: string;
  };
  setSelectedMix: (mix: any) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  progress: number;
  setProgress: (progress: number) => void;
  currentTime: number;
  setCurrentTime: (time: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMixIndex, setCurrentMixIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedMix, setSelectedMix] = useState(mixCardData[0] || {
    image: "",
    name: "",
    descr: "",
    artist: "",
    audio: "",
    Genre: "",
  });
  
  const audioRef = useRef<HTMLAudioElement>(null);

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