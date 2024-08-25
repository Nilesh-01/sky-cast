import { useState } from "react";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  console.log(searchText);
  return (
    <div>
      <input value={searchText} onChange={handleSearchChange} />
    </div>
  );
};

export default SearchInput;
