import { useState, useCallback, useEffect, useContext } from "react";
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
import {Context} from './utils/AppContext';
import ModalViewDetails from './components/ModalViewDetails';
import ModalListViewed from './components/ModalListViewed';

function App() {
  const [genreID, setGenreID] = useState(-1);
  const [keySearch, setKeySearch] = useState('');
  const [keySearchDebounce, setSearchDebounce] = useState('');
  const [isClearKeySearch, setClearKeySearch] = useState(false);
  const [isShowModalDetails, setShowModalDetails] = useState(false);
  const [isShowModalistViewed, setShowModalistViewed] = useState(false);
  const {idViewDetails, setIdViewDetails} = useContext(Context);
  const handleSetGenreID = (id) => {
    setClearKeySearch(true);
    setKeySearch('');
    setGenreID(id);
  }
  const handleKeySearch = (val) => {
    setClearKeySearch(false);
    setKeySearch(val);
  } 
  const handleCloseViewDetails = () => {
    setShowModalDetails(false);
    setIdViewDetails(-1);
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

  useEffect(() => {
    console.log('idViewDetails', idViewDetails);
    if (idViewDetails=== -1) {
      return;
    }
    setShowModalDetails(true);
  }, [idViewDetails])

  return (
    <>
      <Slider />
      <MainMenu emitIdGenre={handleSetGenreID} emitShowModalListViewed={() => setShowModalistViewed(true)}/>
      <InputSearch isClear={isClearKeySearch} value={keySearch} resetVal={keySearch} onChangeSearch={handleKeySearch}/>
      <ComponentIs/>
     <ModalViewDetails visible={isShowModalDetails} emitClose={handleCloseViewDetails}/>
     <ModalListViewed visible={isShowModalistViewed} emitClose={setShowModalistViewed}/>
    </>
  );
}

export default App;
