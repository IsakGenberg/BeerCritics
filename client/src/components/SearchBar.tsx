import * as React from "react";
import { useState } from "react";
import "../styles/searchBar.css";

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
