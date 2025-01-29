import React from "react";
import { Input } from "../../ui/input";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <>
      <Input
        className="w-full  lg:w-[50%] xl:w-[401px] shrink sm:flex hidden border border-[#D8DAD9] pl-4 py-2 rounded-[8px] shadow-none placeholder:text-light-200 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0  text-backgroundGrayDark font-[family-name:var(--font-poppins-semibold)] text-[16px] font-normal text-customGray-400 leading-5"
        type="text"
        name="search"
        placeholder="Search"
        autoComplete="off"
      />
      <BsSearch className="text-neutral-black flex sm:hidden size-6" />
    </>
  );
};

export default Search;
