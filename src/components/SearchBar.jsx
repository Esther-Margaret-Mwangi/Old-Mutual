import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { useSearch } from "../context/SearchContext";
import "../styles/Search.css";

export default function SearchBar({ placeholder = "Search..." }) {
  const { query, setQuery, clearQuery, closeSearch } = useSearch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="search-bar">
      <Search size={16} className="search-bar-icon" aria-hidden="true" />
      <input
        ref={inputRef}
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
      {query && (
        <button
          type="button"
          className="search-bar-clear"
          onClick={clearQuery}
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
