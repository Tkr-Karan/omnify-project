import Dropdown from "../Dropdown/Dropdown";

const TagSearch = () => {
  const dropDownSearchType = ["Service type", "Status"];

  return (
    <div className="w-[100%] p-2 ">
      {dropDownSearchType.map((data, indx) => (
        <div key={indx} className="flex flex-col mt-2">
          <div>{data}</div>
          <div>
            <Dropdown />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TagSearch;
