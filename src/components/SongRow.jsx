import { FaPlay } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { RxDragHandleDots1 } from "react-icons/rx";

import "./SongRow.css";

const SongRow = ({ song, trackNum }) => {
  if (!song) {
    console.log(song, "why undefined?");
    return null;
  }

  //Getting song details
  const { songName, artistName } = song;

  //Handlig row buttons actions
  const handleAction = (type) => {
    return () => {
      switch (type) {
        case "move":
          console.log("Move button is clicked");

          break;
        case "play":
          console.log("Play button is clicked");

          break;
        case "like":
          console.log("Like button is clicked");

          break;
        case "done":
          console.log("Done button is clicked");

          break;
        case "share":
          console.log("Share button is clicked");

          break;
        case "more":
          console.log("More button is clicked");

          break;
        default:
          console.log("No action selected");
      }
    };
  };

  return (
    <tr className="song-table-row">
      <td>
        <button className="song-row-button" onClick={handleAction("move")}>
          <RxDragHandleDots1 style={{ color: "grey", fontSize: "16px" }} />
        </button>
        <button className="song-row-button" onClick={handleAction("play")}>
          <FaPlay style={{ color: "grey", fontSize: "12px" }} />
        </button>
      </td>
      <td>{songName}</td>
      <td>{artistName}</td>
      <td>{trackNum}</td>
      <td>
        <button className="song-row-button" onClick={handleAction("like")}>
          <FaHeart style={{ color: "grey", fontSize: "12px" }} />
        </button>
        <button className="song-row-button" onClick={handleAction("done")}>
          <MdDone style={{ color: "grey", fontSize: "16px" }} />
        </button>
        <button className="song-row-button" onClick={handleAction("share")}>
          <FaShare style={{ color: "grey", fontSize: "12px" }} />
        </button>
        <button className="song-row-button" onClick={handleAction("more")}>
          <FaCaretDown style={{ color: "grey", fontSize: "16px" }} />
        </button>
      </td>
    </tr>
  );
};

export default SongRow;
