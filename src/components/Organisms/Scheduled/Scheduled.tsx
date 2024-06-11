import Dropdown from "@/components/Molecules/Dropdown/Dropdown";
import { DropDownOptionList } from "@/constants/filterPopupData";

const Scheduled = () => {
  return (
    <div className="p-2">
      <div className="text-slate-600 font-semibold">Show Orders for</div>
      <Dropdown dropDownData={DropDownOptionList} />
    </div>
  );
};

export default Scheduled;
