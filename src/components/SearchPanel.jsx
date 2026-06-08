import { useSearch } from "../context/SearchContext";
import SearchBar from "./SearchBar";

export default function SearchPanel({
  placeholder = "Search...",
  wrapperClassName = "layout-search",
}) {
  const { isOpen } = useSearch();
  if (!isOpen) {
    return null;
  }

  return (
    <div className={wrapperClassName}>
      <SearchBar placeholder={placeholder} />
    </div>
  );
}
