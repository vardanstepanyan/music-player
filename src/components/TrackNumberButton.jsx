import { HiMiniArrowsUpDown } from "react-icons/hi2";

const TrackNumberButton = () => {
  const trackNumberHandler = () => {
    console.log("Track Number button is pressed!");
  };

  return (
    <div>
      <button onClick={trackNumberHandler}>
        <HiMiniArrowsUpDown style={{ color: "grey", fontSize: "12px" }} /> Track
        Number
      </button>
    </div>
  );
};

export default TrackNumberButton;
