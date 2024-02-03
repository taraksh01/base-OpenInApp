import Burger from "../assets/burger.svg";
import BaseInverted from "../assets/baseInverted.svg";
import TopNotification from "../assets/topNotification.svg";

const Header = ({ setShowMenu }) => {
  return (
    <div className="h-20 flex items-center justify-between p-5">
      <div className="flex items-center gap-4 md:hidden">
        <span>
          <img
            src={Burger}
            alt="burger"
            className="cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        </span>
        <img src={BaseInverted} alt="base" className="h-7 w-7" />
        <h2 className="font-semibold">Base</h2>
      </div>
      <h2 className="hidden md:block font-semibold text-2xl">Upload CSV</h2>
      <div className="flex gap-5 shrink-0">
        <img src={TopNotification} alt="notification" />
        <img src="" className="rounded-full w-8 h-8 bg-indigo-500" />
      </div>
    </div>
  );
};

export default Header;
