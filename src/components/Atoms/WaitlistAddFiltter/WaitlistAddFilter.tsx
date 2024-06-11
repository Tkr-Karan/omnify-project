"use client";

import Image from "next/image";
import { useState } from "react";
import FilterIcon from "../../../assets/filter.svg";
import FilterPopup from "@/components/Molecules/FilterPopup/FilterPopup";

const WaitlistAddFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setIsFilterOpen(!isFilterOpen);
        }}
        className="flex gap-1 items-center bg-slate-400/20 p-1 pl-2 pr-2 rounded-lg cursor-pointer font-medium hover:bg-slate-700/30"
      >
        <div>
          <Image className="w-[20px]" src={FilterIcon} alt="filter icon" />
        </div>
        Add Filter
      </div>

      {/* filter modal */}
      {isFilterOpen && <FilterPopup />}
    </div>
  );
};

export default WaitlistAddFilter;
