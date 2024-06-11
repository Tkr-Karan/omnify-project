"use client";

import { WaitlistDataTagCard } from "@/constants/waitlist";
import React, { useState } from "react";
import RefreshIcon from "../../assets/refresh.svg";
import ColumnIcon from "../../assets/columns.svg";
import DownloadIcon from "../../assets/download.svg";
import WaitlistTable from "../Molecules/WaitlistTable/WaitlistTable";
import SearchBar from "../Atoms/SearchBar/SearchBar";
import WaitlistCta from "../Atoms/WaitListCta/WaitlistCta";
import WaitlistTagCard from "../Atoms/WaitlistTagCard/WaitListTagCard";
import WaitlistAddFilter from "../Atoms/WaitlistAddFiltter/WaitlistAddFilter";

export default function Waitlist() {
  const ctaButtons = [
    {
      ctaButtonIcon: RefreshIcon,
    },
    { ctaButtonIcon: ColumnIcon },
    { ctaButtonIcon: DownloadIcon },
  ];

  return (
    <div className="w-[95%] h-[100%] bg-[#e2e8f0] flex justify-center items-center">
      <div className="w-[98%] h-[98%] bg-white rounded-xl p-2">
        <div>
          <div>Waitlist</div>

          {/* Waitlist data tag card */}
          <WaitlistTagCard tagCardData={WaitlistDataTagCard} />

          {/* Waitlist CTA Area */}
          <div className="flex justify-between items-center mt-4">
            {/* Add filter  */}
            <WaitlistAddFilter />

            {/* search and cta buttons */}
            <div className="flex gap-4 items-center">
              {/* search bar */}
              <SearchBar placeholder="Search client" />

              {/* cta buttons */}
              <WaitlistCta ctaButtons={ctaButtons} />
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
