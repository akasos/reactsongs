import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "Cotton Eye Joe", duration: "3:36" },
    { title: "Dat New New", duration: "4:12" },
    { title: "Smells Like Teen Spirit", duration: "3:12" },
    { title: "Where da Hood at", duration: "3:46" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
