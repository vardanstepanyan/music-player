import { FaPlay } from "react-icons/fa";

const PlayAllButton = () => {
  const playAllHandler = () => {
    console.log("Play All button is pressed!");
  };

  return (
    <div>
      <button onClick={playAllHandler}>
        <FaPlay style={{ color: "grey", fontSize: "12px" }} /> Play All
      </button>
    </div>
  );
};

export default PlayAllButton;
