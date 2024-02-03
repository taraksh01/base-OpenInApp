import BaseInverted from "../assets/baseInverted.svg";
import Dashboard from "../assets/dashboard.svg";
import Upload from "../assets/upload.svg";
import Invoice from "../assets/invoice.svg";
import Schedule from "../assets/schedule.svg";
import Calender from "../assets/calender.svg";
import Notification from "../assets/notification.svg";
import Settings from "../assets/settings.svg";
import Cross from "../assets/cross.svg";

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "flex flex-col" : "hidden"
      } w-3/4 md:w-56 md:block font-semibold bg-white z-10 absolute h-full`}
    >
      <div className="flex justify-between md:justify-center items-center gap-8 p-5">
        <div className="flex items-center gap-4">
          <img src={BaseInverted} alt="Base" />
          <h1 className="font-semibold text-xl">Base</h1>
        </div>
        <img
          src={Cross}
          alt="Cross"
          className="md:hidden block cursor-pointer"
          onClick={() => setShowMenu(false)}
        />
      </div>
      <div className="flex flex-col gap-8 text-gray-400 p-5">
        <div className="flex gap-4">
          <img src={Dashboard} alt="Dashboard" />
          <p>Dashboard</p>
        </div>
        <div className="flex gap-4">
          <img src={Upload} alt="Upload" />
          <p className="text-indigo-500">Upload</p>
        </div>
        <div className="flex gap-4">
          <img src={Invoice} alt="Invoice" />
          <p>Invoice</p>
        </div>
        <div className="flex gap-4">
          <img src={Schedule} alt="Schedule" />
          <p>Schedule</p>
        </div>
        <div className="flex gap-4">
          <img src={Calender} alt="Calender" />
          <p>Calender</p>
        </div>
        <div className="flex gap-4">
          <img src={Notification} alt="Notification" />
          <p>Notification</p>
        </div>
        <div className="flex gap-4">
          <img src={Settings} alt="Settings" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
