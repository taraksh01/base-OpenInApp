const Button = ({ type, text, img, property, click }) => {
  return (
    <button
      type={type}
      className={`text-white w-full bg-indigo-500 h-11 rounded-lg font-bold flex justify-center items-center flex-shrink-0 gap-3 ${property}`}
      onClick={click}
    >
      {<img src={img} />} {text}
    </button>
  );
};

export default Button;
