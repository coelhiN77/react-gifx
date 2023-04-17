import { useState } from 'react';
import { MdFeedback } from "react-icons/md"
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import GifList from '../Search/GifList';
import Feedback from '../Feedback/Feedback';
import wait from "../Image/search.png";
import error from "../Image/error.png";
import "../Image/homeS.module.css";

const Home = () => {
  const [gifList, setGifList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isStarOpen, setIsStarOpen] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  //Search Gif
  const handleSearch = async (query: string) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${query}&limit=30`);
    const data = await response.json();
    setGifList(data.data);
    setSearchValue(query);
    setNoResults(data.data.length === 0 && query !== '');
  };

  //Open Feedback
  const handleStarOpen = () => {
    setIsStarOpen(!isStarOpen);
  };

  //Toggle theme
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="styles.homeS">
      <div className={`min-h-screen ${isDarkMode ? "bg-zinc-900" : "bg-white"}`}>
        <div className="flex flex-col pt-20 pb-10 justify-start">
          <Navbar darkMode={isDarkMode} onDarkModeToggle={handleThemeToggle} />
          <div className="overflow-hidden">
            <Search handleSearch={handleSearch} />
            {searchValue === '' ? (
              <div className="flex flex-col mt-28 justify-center items-center">
                <img src={wait} alt="waitPhoto" className="w-64 h-64 mr-4" />
                <div className="text-gray-500 text-bold">
                  Waiting to search!
                </div>
              </div>
            ) : noResults ? (
              <div className="flex flex-col mt-28 justify-center items-center">
                <img src={error} alt="errorPhoto" className="w-68 h-52 mr-4" />
                <div className="text-gray-500 text-bold">
                  No results found!
                </div>
              </div>
            ) : (
              <div className={` ${isDarkMode ? "" : "p-7 shadow-xl"}`}>
                <GifList gifList={gifList} darkMode={isDarkMode} />
              </div>
            )}
          </div>
        </div>
        <MdFeedback onClick={handleStarOpen} className="fixed h-10 w-10 mb-1 ml-1 bottom-0 cursor-pointer text-green-500" />
        {isStarOpen && <Feedback onClose={handleStarOpen} />}
      </div>
    </div>
  );
};

export default Home;