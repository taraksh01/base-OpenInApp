import data from "../assets/frontend.json";

const UploadData = () => {
  return (
    <div className="m-8">
      <h2 className="text-2xl font-semibold my-4">Uploads</h2>
      <div className="text-sm bg-gray-100 p-3 gap-3">
        <div className="flex font-semibold p-3 gap-32">
          <p className="shrink-0">Sl No.</p>
          <p className="min-w-36">Links</p>
          <p>Prefix</p>
          <p className="shrink-0 px-10">Add Tags</p>
          <p>Selected Tags</p>
        </div>
        <div className="flex flex-col gap-3">
          {data.map((item) => (
            <div
              className="flex font-normal bg-white h-14 items-center p-3 gap-32 text-left rounded-lg"
              key={item.id}
            >
              <p>{item.id < 10 ? "0" + item.id : item.id}</p>
              <a
                href={item.links}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-500 underline min-w-40"
              >
                {item.links}
              </a>
              <p className="min-w-20">{item.prefix}</p>
              <select className="border border-gray-100 bg-white h-8 w-36 rounded-lg bg-gray-200hover:bg-gray-100">
                <option key={-1}>Select Tags</option>
                {item.tags.split(",").map((tag, index) => (
                  <option key={index}>{tag}</option>
                ))}
              </select>
              <p className="flex gap-4">
                {item.selected.length > 0 &&
                  item.selected.split(",").map((tag) => (
                    <p className="bg-indigo-500 text-white rounded-md py-1 px-2">
                      {tag} <span className="pl-1">x</span>
                    </p>
                  ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadData;
