import PlayAllButton from "./PlayAllButton";
import AddAllButton from "./AddAllButton";
import TrackNumberButton from "./TrackNumberButton";
import SearchTrack from "./SearchTrack";

import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-container-left">
        <PlayAllButton />
        <AddAllButton />
      </div>

      <div className="menu-container-right">
        <TrackNumberButton />
        <SearchTrack />
      </div>
    </div>
  );
};

export default Menu;
