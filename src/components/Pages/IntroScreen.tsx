import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import CreateProfile from './CreateProfile';
import ButtonPage from "../Button/ButtonPage";

function IntroScreen() {
  const [isScreenOne, setIsScreenOne] = useState(true);
  const [isScreenTwo, setIsScreenTwo] = useState(false);
  const [isScreenThree, setIsScreenThree] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //Screens 1-2-3
  const goIntroTwo = () => {
    if (isScreenOne) {
      setIsScreenOne(false);
      setIsScreenTwo(true);
    } else if (isScreenTwo) {
      setIsScreenTwo(false);
      setIsScreenThree(true);
    }
  };
  const goIntroThree = () => {
    if (isScreenTwo) {
      setIsScreenTwo(false);
      setIsScreenThree(true);
    }
  };

  //Loading Page
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center bg-cover bg-center bg-[url('/src/components/Image/background.jpg')]">
      <div>
        {isScreenOne && (
          //Welcome
          <div>
            <h1 className="text-5xl text-white mb-10 font-bold font-sans">Welcome to Gifx</h1>
            <ButtonPage name="Next" onClick={goIntroTwo} />
          </div>
        )}
        {isScreenTwo && (
          //Presentation 
          <div className="flex w-96 h-80 justify-center items-center">
            <div>
              <h1 className="text-white text-3xl text-center font-mono">Find gif in every way in a more pleasant way to share with your friends and laugh with internet contents in Gifx. Project made by <span className="text-green-500 font-bold ">coelhiNCode</span> - &copy; 2023</h1>
              <ButtonPage name="Next" onClick={goIntroThree} />
            </div>
          </div>
        )}
        {isScreenThree && (
          //Profile
          <div>
            <CreateProfile />
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroScreen;