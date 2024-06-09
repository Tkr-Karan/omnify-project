"use client";

import { FilterPopupLeftPanel } from "@/constants/filterPopupData";
import Image from "next/image";
import React, { useState } from "react";

const FilterPopup = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };
  return (
    <div className="w-[600px] h-[400px] bg-slate-200 absolute z-[99] mt-2 rounded-md flex flex-col shadow-2xl overflow-hidden">
      <div className="flex">
        {/* left drawer container */}
        <div className="w-[50%] h-[350px] border-r-slate-300 border-r-2 border-solid">
          {FilterPopupLeftPanel.map((filter, indx) => (
            <div
              key={indx}
              onClick={() => handleTabClick(indx)}
              className={`flex items-center justify-between gap-6 p-2 rounded-md cursor-pointer ml-2 mr-2 mt-2 ${
                activeTab === indx ? "bg-slate-500/20" : "hover:bg-slate-500/10"
              }`}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={filter.filterLeftPanelIcon}
                  alt={filter.filterLeftPanelText}
                  width={20}
                  height={20}
                />
                <span className="">{filter.filterLeftPanelText}</span>
              </div>
              <div className="">
                {filter.filterleftPanelDataCount >= 1 && (
                  <span className="text-xs ">
                    {filter.filterleftPanelDataCount}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show orrder container */}
        <div className="bg-white w-[70%]">
          {React.createElement(FilterPopupLeftPanel[activeTab].content)}
        </div>
      </div>
      {/* Filter Cta buttons reset and Apply */}
      <div className="flex gap-4 align-baseline justify-end p-2 bg-white border-t-slate-300 border-solid border-t-2 rounded-b-md">
        <div className="bg-slate-500/20 p-1 pl-2 pr-2 cursor-pointer rounded-lg text-black hover:bg-slate-500/30 font-medium">
          Reset to Default
        </div>
        <div className="bg-black p-1 pl-2 pr-2 cursor-pointer rounded-lg text-white">
          Apply
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
