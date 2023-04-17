import Avatar from '../Avatar/Avatar';

const CreateProfile = () => {

  //Save profile here
  function handleSaveProfile(avatar: string, name: string) {
    localStorage.setItem("avatar", avatar);
    localStorage.setItem("name", name);
  };

  return (
    <div>
      <Avatar onSaveProfile={handleSaveProfile} />
    </div>
  );
};

export default CreateProfile;