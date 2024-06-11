import {
  serviceDropDownOptionList,
  statusDropDownOptionList,
} from "@/constants/filterPopupData";
import Dropdown from "../Dropdown/Dropdown";

const TagSearch = () => {
  const dropDownSearchType = ["Service type", "Status"];

  return (
    <div className="w-[100%] p-2  ">
      {dropDownSearchType.map((data, indx) => (
        <div key={indx} className="flex flex-col mt-2">
          <div>{data}</div>
          <div>
            <Dropdown
              dropDownData={
                data === "Service type"
                  ? serviceDropDownOptionList
                  : statusDropDownOptionList
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TagSearch;
