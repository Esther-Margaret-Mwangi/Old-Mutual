import { Search, X } from "lucide-react";
import { useSearch } from "../context/SearchContext";
import "../styles/Search.css";

export default function SearchBar({ placeholder = "Search..." }) {
  const { query, setQuery, closeSearch } = useSearch();

  return (
    <div className="search-bar">
      <Search size={16} className="search-bar-icon" aria-hidden="true" />
      <input
        type="search"
        className="search-bar-input"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeSearch();
          }
        }}
        aria-label="Search"
      />
      <button
        type="button"
        className="search-bar-close"
        onClick={closeSearch}
        aria-label="Close search"
      >
        <X size={16} />
      </button>
    </div>
  );
}
