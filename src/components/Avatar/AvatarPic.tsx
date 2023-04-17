import { useState } from 'react';
import user from "../Image/Avatars/user.png";
import avatar1 from "../Image/Avatars/avatar1.png";
import avatar2 from "../Image/Avatars/avatar2.png";
import avatar3 from "../Image/Avatars/avatar3.png";
import avatar4 from "../Image/Avatars/avatar4.png";
import avatar5 from "../Image/Avatars/avatar5.png";
import avatar6 from "../Image/Avatars/avatar6.png";
import avatar7 from "../Image/Avatars/avatar7.png";

//Props
interface AvatarPicProps {
  selectedAvatar: string;
  setSelectedAvatar: React.Dispatch<React.SetStateAction<string>>;
};

const AvatarPic = ({ selectedAvatar, setSelectedAvatar }: AvatarPicProps) => {
  const [avatarList] = useState([
    user,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7
  ]);
  const displayAvatar = user;

  //Button Left
  const handleClickLeft = () => {
    const index = avatarList.indexOf(selectedAvatar);
    const newIndex = (index === 0) ? avatarList.length - 1 : index - 1;
    setSelectedAvatar(avatarList[newIndex]);
  };

  //Button Right
  const handleClickRight = () => {
    const index = avatarList.indexOf(selectedAvatar);
    const newIndex = (index === avatarList.length - 1) ? 0 : index + 1;
    setSelectedAvatar(avatarList[newIndex]);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <button className="bg-green-500 text-white rounded-full py-3 px-3 mr-4 font-bold text-lg" onClick={handleClickLeft}>
        {"<"}
      </button>
      <div className="w-40 h-40 rounded-full overflow-hidden">
        {selectedAvatar ? (
          <img src={selectedAvatar} alt="" className="object-cover justify-center w-40 h-40" />
        ) : (
          <img src={displayAvatar} alt="Default avatar" className="object-cover justify-center w-40 h-40" />
        )}
      </div>
      <button className="bg-green-500 text-white rounded-full py-3 px-3 ml-4 font-bold text-lg" onClick={handleClickRight}>
        {">"}
      </button>
    </div>
  );
};

export default AvatarPic;