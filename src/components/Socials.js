import { IoLogoGithub, IoLogoLinkedin, IoLogoDiscord } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="flex items-center justify-between gap-5">
      <IoLogoGithub />
      <AiFillTwitterCircle />
      <IoLogoLinkedin />
      <IoLogoDiscord />
    </div>
  );
};

export default Socials;
