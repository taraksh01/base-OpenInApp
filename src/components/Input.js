const InputBox = ({ type, placeholder, label }) => {
  return (
    <div className="flex flex-col gap-4">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-gray-100 text-black rounded-xl h-11 p-4 outline-indigo-600"
      />
    </div>
  );
};

export default InputBox;
