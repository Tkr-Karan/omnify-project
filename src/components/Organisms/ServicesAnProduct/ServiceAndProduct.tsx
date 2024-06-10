"use client";

import SearchBar from "@/components/Atoms/SearchBar/SearchBar";
import TagSearch from "@/components/Molecules/TagSearch/TagSearch";
import { useState } from "react";

const ServiceAndProduct = () => {
  const [searchType, setSearchType] = useState("name");

  return (
    <div>
      <div className="flex justify-between p-2">
        <div className="flex gap-2">
          <input
            id="searchByName"
            type="radio"
            name="searchtype"
            className="accent-black cursor-pointer"
            checked={searchType === "name"}
            onChange={() => setSearchType("name")}
          />
          <label htmlFor="searchByName" className="cursor-pointer">
            Search by name
          </label>
        </div>
        <div className="flex gap-2">
          <input
            id="searchByTag"
            type="radio"
            name="searchtype"
            className="accent-black cursor-pointer"
            checked={searchType === "tag"}
            onChange={() => setSearchType("tag")}
          />
          <label htmlFor="searchByTag" className="cursor-pointer">
            Search by tags
          </label>
        </div>
        <div></div>
      </div>

      {searchType === "name" ? (
        <SearchBar placeholder={"Search service name"} />
      ) : (
        <TagSearch />
      )}
    </div>
  );
};

export default ServiceAndProduct;
