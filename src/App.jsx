import { useState, useCallback, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ListGroupData } from "./data";
import "./App.css";
import Slider from "./components/Slider";
import MainMenu from "./components/MainMenu";
import InputSearch from "./components/InputSearch";
import GroupFilm from "./components/GroupFilm";
import GroupFilmFilter from "./components/GroupFilmFilter";
import GroupFilmSearch from "./components/GroupFilmSearch";
function App() {
  const [genreID, setGenreID] = useState(-1);
  const [keySearch, setKeySearch] = useState('');
  const [keySearchDebounce, setSearchDebounce] = useState('');
  const [isClearKeySearch, setClearKeySearch] = useState(false);
  const handleSetGenreID = (id) => {
    setClearKeySearch(true);
    setKeySearch('');
    setGenreID(id);
  }
  const handleKeySearch = (val) => {
    setClearKeySearch(false);
    setKeySearch(val);
  } 
  const ComponentIs = useCallback(() => {
    if (genreID === -1 && keySearchDebounce === "") {
      return (
        <>
          {ListGroupData.length &&
            ListGroupData.map((item, index) => (
              <GroupFilm
                key={index}
                titleGroup={item.title}
                type={item.value}
              />
            ))}
        </>
      )
    } 
    if (genreID > -1 && keySearchDebounce === "") {
      return (
        <>
          <GroupFilmFilter genreId={genreID} />
        </>
      )
    }
    if (keySearchDebounce !== "") {
      setGenreID(-1);
      return (
        <GroupFilmSearch keySearch={keySearchDebounce} />
      )
    }
  }, [genreID, keySearchDebounce])


  useEffect(() => {
    const deboundId = setTimeout(() => {
      setSearchDebounce(keySearch)
    }, 1000);
    return () => {
      clearTimeout(deboundId)
    }
  },[keySearch])
  return (
    <>
      <Slider />
      <MainMenu emitIdGenre={handleSetGenreID}/>
      <InputSearch isClear={isClearKeySearch} value={keySearch} resetVal={keySearch} onChangeSearch={handleKeySearch}/>
      <ComponentIs/>
     
    </>
  );
}

export default App;
