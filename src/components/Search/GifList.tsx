//Star, Like and Heart
import { AiOutlineStar, AiFillStar, AiOutlineLike, AiFillLike, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState, useEffect } from 'react';
import { useReward } from 'react-rewards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Types
interface Gif {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
};

//Props
interface GifListProps {
  gifList: Gif[];
  darkMode: boolean;
};

const GifList = ({ gifList, darkMode }: GifListProps) => {
  const [selectedGif, setSelectedGif] = useState<Gif | null>(null);
  const { reward, isAnimating } = useReward('rewardId', 'confetti');
  const [isStarred, setIsStarred] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isHearted, setIsHearted] = useState(false);

  //Click Gif
  const handleGifClick = (gif: Gif) => {
    setSelectedGif(gif);
  };

  //Window Gif
  const handleCloseModal = () => {
    setSelectedGif(null);
  };

  //Save Panel
  useEffect(() => {
    const storedStarred = localStorage.getItem(`isStarred-${selectedGif?.id}`);
    const storedLiked = localStorage.getItem(`isLiked-${selectedGif?.id}`);
    const storedHearted = localStorage.getItem(`isHearted-${selectedGif?.id}`);

    setIsStarred(storedStarred === 'true');
    setIsLiked(storedLiked === 'true');
    setIsHearted(storedHearted === 'true');
  }, [selectedGif]);

  return (
    <div className="min-h-screen justify-center grid w-full">
      {selectedGif && (
        <div className={`fixed inset-0 flex justify-center items-center z-10 w-full h-full ${darkMode ? "bg-zinc-900" : "bg-white"}`}>
          <div>
            <button onClick={handleCloseModal} className="text-green-500 font-bold flex ml-60 mb-2 text-2xl">X</button>
            <img
              src={selectedGif.images.fixed_height.url}
              alt={selectedGif.title}
              className="w-60 h-60 ml-2 rounded-lg shadow-lg border-green-500 border-2"
            />
            <div className={`w-64 justify-center flex cursor-pointer text-4xl mt-4 rounded-2xl p-1 ${darkMode ? "bg-zinc-800" : "border-2 border-green-500"}`}>
              <button onClick={() => {
                setIsStarred(!isStarred);
                localStorage.setItem(`isStarred-${selectedGif?.id}`, String(!isStarred));
              }}>
                {isStarred ? <AiFillStar className="text-yellow-500" /> : <AiOutlineStar className="text-yellow-500" />}
              </button>

              <button onClick={() => {
                setIsLiked(!isLiked);
                localStorage.setItem(`isLiked-${selectedGif?.id}`, String(!isLiked));
              }}>
                {isLiked ? <AiFillLike className="text-blue-500 ml-7 mr-7" /> : <AiOutlineLike className="text-blue-500 ml-7 mr-7" />}
              </button>

              <div className="mt-3">
                <button
                  disabled={isAnimating}
                  onClick={() => {
                    setIsHearted(!isHearted);
                    localStorage.setItem(`isHearted-${selectedGif?.id}`, String(!isHearted));
                    if (!isHearted) {
                      reward();
                      toast("💚 Super Like!", {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                    }
                  }}
                >
                  <span id="rewardId" />
                  {isHearted ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart className="text-red-500" />}
                </button>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      )
      }
      <div className="grid grid-cols-3 gap-7 p-7 shadow-xl border border-zinc-800 rounded-xl">
        {gifList.map((gif) => (
          <img
            src={gif.images.fixed_height.url}
            alt={gif.title}
            key={gif.id}
            className="w-60 h-60 rounded-lg shadow-lg border-green-500 border-2 hover:border-4 cursor-pointer"
            onClick={() => handleGifClick(gif)}
          />
        ))}
      </div>
    </div >
  );
};

export default GifList;