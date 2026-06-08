import { Search } from "lucide-react";
import { useSearch } from "../context/SearchContext";

export default function SearchButton({ className = "topbar-search-btn" }) {
  const { isOpen, toggleSearch } = useSearch();

  return (
    <button
      type="button"
      className={`${className} ${isOpen ? "topbar-search-btn--active" : ""}`}
      onClick={toggleSearch}
      aria-label="Search"
      aria-pressed={isOpen}
    >
      <Search size={17} />
    </button>
  );
}
