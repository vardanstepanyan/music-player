import { useState, createContext } from "react";

import Menu from "./components/Menu";
import SongList from "./components/SongList";
import SongRow from "./components/SongRow";
import MusicUploadForm from "./components/MusicUploadForm";

import "./App.css";

export const MusicContext = createContext();

function App() {
  //Using use state with already updated music
  const [songs, setSongs] = useState([
    { songName: "Yamakasi", artistName: "Miyagi & Эндшпиль" },
    { songName: "Minor", artistName: "Miyagi & Эндшпиль" },
    { songName: "All The Time", artistName: "Miyagi & Эндшпиль" },
    { songName: "I Got Love", artistName: "Miyagi & Эндшпиль" },
    { songName: "Silhouette", artistName: "Miyagi & Эндшпиль" },
    { songName: "Captain", artistName: "Miyagi" },
    { songName: "Narrative", artistName: "Miyagi & Эндшпиль" },
  ]);

  return (
    <div className="App">
      <MusicContext.Provider value={{ songs, setSongs }}>
        <Menu />
        <SongList />
        <SongRow />
        <MusicUploadForm />
      </MusicContext.Provider>
    </div>
  );
}

export default App;
