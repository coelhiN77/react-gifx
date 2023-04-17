import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AvatarPic from "../Avatar/AvatarPic";
import user from "../Image/Avatars/user.png";

//Props
interface AvatarProps {
  onSaveProfile: (avatar: string, name: string) => void;
};

function Avatar({ onSaveProfile }: AvatarProps) {
  const [avatar, setAvatar] = useState(user);
  const [name, setName] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(true);
  const navigate = useNavigate();

  //Select photo computer
  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        setAvatar(dataUrl);
        setIsAvatarLoaded(true);
        setIsButtonDisabled(name.trim().length === 0);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  //Save user profile
  const handleSaveProfile = () => {
    if (isAvatarLoaded || /\.(jpeg|jpg|png)$/.test(avatar)) {
      onSaveProfile(avatar, name);
      navigate('/home');
    } else {
      console.log("test");
    }
  };

  //Change name on input
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsButtonDisabled(!isAvatarLoaded || event.target.value.trim().length === 0);
  };

  return (
    <div className="text-white w-auto h-auto py-10 px-10 flex flex-col items-center my-4">
      <div className="overflow-hidden">
        <AvatarPic selectedAvatar={avatar} setSelectedAvatar={setAvatar} />
      </div>
      <label htmlFor="avatar-upload" className="cursor-pointer mt-4 mb-0 text-green-500 rounded-md font-bold">
        Choose Photo
      </label>
      <input id="avatar-upload" type="file" accept="image/*" className="hidden" onChange={handleSelectFile} />
      <div className="text-white">
        <input
          type="text"
          placeholder="Your Name..."
          style={{ fontSize: "16px" }}
          value={name}
          onChange={handleNameChange}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Your Name...")}
          className="relative rounded py-2 pl-2 border-0 ring-1 ring-green-500 outline-none text-white text-base bg-green-500 caret-black sm:text-sm sm:leading-6 placeholder-font-bold placeholder:text-gray-500 focus:ring-2 focus-ring-inset focus:ring-green focus:z-10 focus:text-white focus:font-bold mt-0"
        />
      </div>
      <button onClick={handleSaveProfile} disabled={isButtonDisabled}
        className={`text-white group relative flex justify-center rounded-md bg-green-600 py-2 px-5 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300 my-6 m-10 font-bold ${isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
      > Save Profile </button>
    </div>
  );
};

export default Avatar;