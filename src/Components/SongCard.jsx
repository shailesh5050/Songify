import React from "react";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
const SongCard = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div className="song-card">
      <center>
        <img src="https://c.saavncdn.com/150/Pyaar-Karte-Ho-Na-Hindi-2021-20211123053301-500x500.jpg" alt="" />
      </center>
      <div className="play-btn">{isPlaying ? <PlayArrowIcon /> : <PauseIcon />}</div>
      <div className="card-info">
        <h3>Pyar Karte Ho Na</h3>
        <h4>Javed-Moshin, Stebin ben,Shreya Ghosal</h4>
      </div>
    </div>
  );
};

export default SongCard;
