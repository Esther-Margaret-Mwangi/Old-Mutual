import { useSearch } from "../context/SearchContext";

export default function SearchEmpty() {
  const { query } = useSearch();

  if (!query.trim()) {
    return null;
  }

  return (
    <p className="search-empty">
      No results for &ldquo;{query.trim()}&rdquo;
    </p>
  );
}
