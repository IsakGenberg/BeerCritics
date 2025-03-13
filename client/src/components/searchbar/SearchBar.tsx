import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchBar.css";
/**
 * 
 * @returns A search bar that allows the user to search for a beer by name
 */
const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const navigate = useNavigate();

  // Searches for a beer when the user presses the Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/beer/${encodeURIComponent(searchInput)}`);
    }
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
