import { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

const SearchInput = ({ onClose }) => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  console.log(searchText);
  return (
    <div className="search-input flex">
      <input
        className="w-full p-[8px] bg-transparent outline-none"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Enter City"
      />
      <SearchIcon onClick={onClose} className="mr-[2px]" />
    </div>
  );
};

export default SearchInput;
