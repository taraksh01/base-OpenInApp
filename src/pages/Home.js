import { useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Upload from "../components/Upload";
import UploadData from "../components/UploadData";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex">
      <div className={`${showMenu ? "block" : "hidden"} md:block`}>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <div className="flex flex-col w-full md:absolute left-60 md:w-[calc(100vw-16rem)]">
        <Header setShowMenu={setShowMenu} />
        <h2 className="block md:hidden font-semibold p-8">Upload CSV</h2>
        <Upload />
        <UploadData />
      </div>
    </div>
  );
};

export default Home;
