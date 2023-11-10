
import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b-2">
      <h1 className="text-4xl font-bold my-4 text-black">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;