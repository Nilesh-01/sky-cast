import { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

const SearchInput = ({ onClose, onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchButton = () => {
    onClose();
    onSearch(searchText);
  };
  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleSearchButton();
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
      />
      <SearchIcon onClick={handleSearchButton} className="mr-[2px]" />
    </div>
  );
};

export default SearchInput;
