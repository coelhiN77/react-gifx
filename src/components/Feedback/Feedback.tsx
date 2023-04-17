import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import StarRatings from "react-star-ratings";
import 'react-toastify/dist/ReactToastify.css';

//Props
interface FeedbackProps {
  onClose: () => void;
};

const Feedback = ({ onClose }: FeedbackProps) => {
  const [rating, setRating] = useState(0);

  //Save Stars
  useEffect(() => {
    const storedRating = localStorage.getItem('feedbackRating');
    if (storedRating) {
      setRating(parseInt(storedRating));
    }
  }, []);

  //Star 1-5
  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    localStorage.setItem('feedbackRating', newRating.toString());
    toast.success("Thanks for feedback", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="bg-black bg-opacity-50 fixed bottom-0 inset-0 flex justify-center items-center z-10 text-white">
      <div className="bg-zinc-900 w-400 p-20 rounded-lg shadow-lg relative">
        <h2 className="font-bold text-3xl text-center mb-3">Feedback</h2>
        <h3 className="text-gray-400 text-center mb-10">How much did you like my project?</h3>
        <div className="justify-center flex">
          <StarRatings
            rating={rating}
            numberOfStars={5}
            starRatedColor="#22C55E"
            starHoverColor="yellow"
            starDimension="30px"
            starSpacing="5px"
            changeRating={handleRatingChange}
          />
        </div>
        <button onClick={onClose} className="absolute top-4 right-7 text-crimson text-2xl font-bold border-none bg-transparent text-green-500">X</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Feedback;