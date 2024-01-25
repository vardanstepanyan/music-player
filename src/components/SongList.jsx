import React, { useContext } from "react";
import { MusicContext } from "../App";
import SongRow from "./SongRow";

import "./SongList.css";

const SongList = () => {
  // Getting uploaded songs
  const { songs } = useContext(MusicContext);
  console.log(songs);

  return (
    <table className="songs-table">
      <thead>
        <tr className="titles-row">
          {/* Empty cell for play and move buttons  */}
          <th className="play-button-cell"></th>
          <th>Song Name</th>
          <th>Artist Name</th>
          <th className="track-cell">Track</th>
          {/* Empty cell for like, done, share, options buttons  */}
          <th></th>
        </tr>
      </thead>
      <tbody className="table-body">
        {songs.map((song, index) => (
          <SongRow key={index} song={song} trackNum={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
