"use client";

import Image from "next/image";
import MagnifyIcon from "../../../assets/search.svg";
import { useRef, useState } from "react";
import ClearIcon from "../../../assets/x-circle.svg";

const SearchBar = ({ placeholder }: any) => {
  const [intputVal, setinputVal] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setinputVal("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex gap-4 items-center bg-slate-300/10 border-2 border-slate-500/20 m-2 rounded-lg p-1 pl-2">
      <div>
        <Image className="w-[20px]" src={MagnifyIcon} alt="magnify glass" />
      </div>
      <input
        ref={inputRef}
        value={intputVal}
        className="outline-none border-none bg-slate-100/10 w-[100%]"
        type="text"
        placeholder={placeholder}
        onChange={(e) => setinputVal(e.target.value)}
      />
      {intputVal.length >= 1 && (
        <div className="cursor-pointer" onClick={handleClear}>
          <Image className="w-[20px]" src={ClearIcon} alt="clear icon" />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
