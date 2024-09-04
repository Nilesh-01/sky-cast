import { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

const SearchInput = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      onSearch(searchText);
    }
  };
  return (
    <div className="search-input flex">
      <input
        className="w-full p-[8px] bg-transparent outline-none"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Enter City"
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <SearchIcon onClick={() => onSearch(searchText)} className="mr-[2px]" />
    </div>
  );
};

export default SearchInput;
