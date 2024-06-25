import React, { useState, useRef, useEffect, createContext } from "react";
import { songsData } from "../assets/assets";
export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[2]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const [favorites, setFavorites] = useState([]);

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playwithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  const addToFavorites = (song) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (fav) => fav.name === song.name
      );
      if (!isAlreadyFavorite) {
        return [...prevFavorites, song];
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (song) => {
    setFavorites((prevFavorites) => {
      return prevFavorites.filter((fav) => fav.name !== song.name);
    });
  };

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playwithId,
    previous,
    next,
    seekSong,
    favorites,
    addToFavorites,
    removeFromFavorites,
  };

  useEffect(() => {
    const updateSeekBar = () => {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration) {
        seekBar.current.style.width = (currentTime / duration) * 100 + "%";
      }
      setTime({
        currentTime: {
          second: Math.floor(currentTime % 60),
          minute: Math.floor(currentTime / 60),
        },
        totalTime: {
          second: Math.floor(duration % 60),
          minute: Math.floor(duration / 60),
        },
      });
    };

    audioRef.current.ontimeupdate = updateSeekBar;
  }, [audioRef]);

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
