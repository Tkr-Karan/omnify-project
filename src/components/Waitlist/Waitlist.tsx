"use client";

import { WaitlistDataTagCard } from "@/constants/waitlist";
import Image from "next/image";
import React, { useState } from "react";
import FilterIcon from "../../assets/filter.svg";
import MagnifyIcon from "../../assets/search.svg";
import RefreshIcon from "../../assets/refresh.svg";
import ColumnIcon from "../../assets/columns.svg";
import DownloadIcon from "../../assets/download.svg";
import FilterPopup from "../Molecules/FilterPopup/FilterPopup";
import WaitlistTable from "../Molecules/WaitlistTable/WaitlistTable";
import SearchBar from "../Atoms/SearchBar/SearchBar";

export default function Waitlist() {
  const ctaButtons = [
    {
      ctaButtonIcon: RefreshIcon,
    },
    { ctaButtonIcon: ColumnIcon },
    { ctaButtonIcon: DownloadIcon },
  ];

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-[95%] h-[100%] bg-[#e2e8f0] flex justify-center items-center">
      <div className="w-[98%] h-[98%] bg-white rounded-xl p-2">
        <div>
          <div>Waitlist</div>

          {/* Waitlist data tag card */}
          <div className=" flex justify-between mt-2 ">
            {WaitlistDataTagCard.map((waitlist, indx) => (
              <div
                key={indx}
                className="w-[30%] flex items-center gap-2 border-slate border-solid rounded-md  border-2 p-1 pl-2  hover:border-2 hover:border-solid hover:border-gray-900/20 cursor-pointer hover:shadow-gray hover:shadow-lg"
              >
                <span className="font-semibold">
                  {waitlist.waitlistTagName}
                </span>
                <span className="text-[12px] text-slate-600">
                  {waitlist.waitlistNumber}
                </span>
              </div>
            ))}
          </div>

          {/* Waitlist CTA Area */}
          <div className="flex justify-between items-center mt-4">
            {/* Add filter  */}
            <div>
              <div
                onClick={() => {
                  setIsFilterOpen(!isFilterOpen);
                }}
                className="flex gap-1 items-center bg-slate-400/20 p-1 pl-2 pr-2 rounded-lg cursor-pointer font-medium hover:bg-slate-700/30"
              >
                <div>
                  <Image
                    className="w-[20px]"
                    src={FilterIcon}
                    alt="filter icon"
                  />
                </div>
                Add Filter
              </div>

              {/* filter modal */}
              {isFilterOpen && <FilterPopup />}
            </div>
            {/* search and cta buttons */}
            <div className="flex gap-4 items-center">
              {/* search bar */}
              {/* <div className="flex items-center gap-1 border-2 border-gray p-1 rounded-lg shadow-gray shadow-lg">
                <div>
                  <Image
                    className="w-[20px]"
                    src={MagnifyIcon}
                    alt="magnify glass"
                  />
                </div>
                <input
                  className="outline-none border-none"
                  type="text"
                  placeholder="search client"
                />
              </div> */}

              <SearchBar placeholder="Search client" />

              {/* cta buttons */}
              <div className="flex gap-6">
                {ctaButtons.map((icon, indx) => (
                  <div key={indx} className="cursor-pointer">
                    <Image
                      className="w-[20px]"
                      src={icon.ctaButtonIcon}
                      alt="cta button data"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <WaitlistTable />
        </div>
      </div>
    </div>
  );
}
