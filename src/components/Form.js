import { useState } from "react";
import Button from "./Button";
import InputBox from "./Input";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const login = () => {
    if (email.match(/\S+@\S+\.\S+/) && password.length > 6) {
      setError("");
      navigate("/home");
    } else setError("Email or password not valid");
  };

  return (
    <form className="flex flex-col gap-6 p-5">
      <InputBox
        type={"email"}
        label={"Email Address"}
        placeholder={"your@email.com"}
        setValue={setEmail}
      />
      <InputBox
        type={"password"}
        label={"Password"}
        placeholder={"Choose a strong password"}
        setValue={setPassword}
      />
      <a className="text-blue-600 cursor-pointer">Forgot password?</a>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <Button type={"button"} text={"Sign In"} click={login} />
    </form>
  );
};

export default Form;
