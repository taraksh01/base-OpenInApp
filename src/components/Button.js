const Button = ({ type, text }) => {
  return (
    <button
      type={type}
      className="text-white bg-indigo-500 h-11 rounded-xl text-center font-bold"
    >
      {text}
    </button>
  );
};

export default Button;
