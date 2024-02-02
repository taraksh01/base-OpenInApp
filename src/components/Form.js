import Button from "./Button";
import InputBox from "./Input";

const Form = () => {
  return (
    <form className="flex flex-col gap-6 p-5">
      <InputBox
        type={"email"}
        label={"Email Address"}
        placeholder={"your@email.com"}
      />
      <InputBox
        type={"password"}
        label={"Password"}
        placeholder={"Choose a strong password"}
      />
      <a className="text-blue-600 cursor-pointer">Forgot password?</a>
      <Button type={"button"} text={"Sign In"} />
    </form>
  );
};

export default Form;
