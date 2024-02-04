const InputBox = ({ type, placeholder, label, setValue }) => {
  return (
    <div className="flex flex-col gap-4">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-gray-100 text-black rounded-xl h-11 p-4 outline-indigo-600"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputBox;
