import Logo from "../assets/base.svg";
import Form from "../components/Form";
import Google from "../assets/google.svg";
import Apple from "../assets/apple.svg";
import Socials from "../components/Socials";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      tokenResponse.access_token && navigate("/home");
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <main className="flex flex-col md:flex-row">
      <div className="h-20 flex items-center justify-start md:flex-col md:justify-between md:items-center md:w-1/2 md:h-[100vh] bg-indigo-500 text-white p-5 gap-4 md:p-16">
        <span className="md:self-start">
          <img src={Logo} className="w-8 md:w-20" />
        </span>
        <h1 className="text-xl font-semibold md:text-7xl md:font-bold uppercase">
          Base
        </h1>
        <div className="hidden md:block text-5xl">
          <Socials />
        </div>
      </div>
      <div className="md:w-1/2 md:h-[100vh] bg-white flex justify-center items-center">
        <div className="flex flex-col md:w-3/5 gap-4 p-10">
          <h2 className="text-4xl font-bold self-start">Sign In</h2>
          <p className="self-start">Sign in to your account</p>
          <div className="flex justify-around items-center">
            <button
              type="button"
              className="text-xs text-gray-500 bg-gray-50 h-8 flex items-center justify-center gap-4 px-5 rounded-xl shrink-0"
              onClick={login}
            >
              <img src={Google} />
              Sign in with Google
            </button>
            <button
              type="button"
              className="text-xs text-gray-500 bg-gray-50 h-8 flex items-center justify-center gap-4 px-5 rounded-xl shrink-0"
            >
              <img src={Apple} /> Sign in with Apple
            </button>
          </div>
          <Form />
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-1">
            <p className="text-gray-400 mt-5">Don’t have an account? </p>
            <a className="text-blue-600 cursor-pointer mt-5">Register here</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:hidden text-3xl text-gray-500 text-center">
        <Socials />
      </div>
    </main>
  );
};

export default Home;
