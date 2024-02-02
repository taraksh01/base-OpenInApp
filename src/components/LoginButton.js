import Google from "../assets/google.svg";
import Apple from "../assets/apple.svg";

const LoginButton = ({ text }) => {
  return (
    <button
      type="button"
      className="text-xs text-gray-500 bg-gray-50 h-8 flex items-center justify-center gap-4 px-5 rounded-xl"
    >
      {text === "Apple" ? <img src={Apple} /> : <img src={Google} />}
      Sign in with {text}
    </button>
  );
};

export default LoginButton;
