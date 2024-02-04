import Excel from "../assets/excel.svg";
import Button from "../components/Button";
import FileUpload from "../assets/fileUpload.svg";
import Spinner from "../assets/spinner.svg";
import { useState } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const [uploadState, setUploadState] = useState("waiting");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedName(file?.name);
    setError("");
  };

  const removeFile = () => {
    setSelectedFile(null);
    setSelectedName("");
  };

  return (
    <div className="mx-auto my-10 p-5">
      <div className="w-[296] md:w-[564] flex flex-col gap-5">
        <div className="border border-dashed h-64 w-full rounded-lg flex flex-col justify-center  items-center gap-4">
          <img src={Excel} className="h-9 w-9" />
          <p className="text-gray-400 relative">
            {selectedName || "Drop your excel sheet here or"}
            {!selectedFile && (
              <span className="text-indigo-500 pl-1">
                browse
                <input
                  type="file"
                  className="absolute cursor-pointer opacity-0 w-full h-full top-0 bottom-0 left-0 right-0"
                  onChange={handleFileChange}
                  accept=".xlsx, .xls, .csv"
                />
              </span>
            )}
          </p>
          {selectedFile && (
            <p className="text-red-600 cursor-pointer" onClick={removeFile}>
              Remove
            </p>
          )}
        </div>
        {error && <p className="text-red-600 text-center">{error}</p>}
        {uploadState === "waiting" && (
          <Button
            text={"Upload"}
            img={FileUpload}
            type={"submit"}
            property={"h-12"}
            click={() => {
              selectedFile?.name
                ? (setUploadState("uploading"),
                  setTimeout(() => {
                    setUploadState("success");
                  }, 3000))
                : setError("Please select a file");
            }}
          />
        )}
        {uploadState === "uploading" && (
          <Button img={Spinner} type={"submit"} property={"h-12"} />
        )}
        {uploadState === "success" && (
          <Button
            text={"Upload"}
            img={FileUpload}
            type={"submit"}
            property={"opacity-40 cursor-wait h-12"}
          />
        )}
      </div>
    </div>
  );
};

export default Upload;
