import Dropdown from "@/components/Molecules/Dropdown/Dropdown";

const Scheduled = () => {
  return (
    <div className="p-2">
      <div className="text-slate-600 font-semibold">Show Orders for</div>
      <Dropdown />
    </div>
  );
};

export default Scheduled;
