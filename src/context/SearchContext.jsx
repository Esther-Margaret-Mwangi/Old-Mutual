import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchContext = createContext(null);

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setQuery("");
    setIsOpen(false);
  }, [location.pathname]);

  const value = useMemo(
    () => ({
      query,
      setQuery,
      isOpen,
      toggleSearch: () => setIsOpen((open) => !open),
      closeSearch: () => {
        setIsOpen(false);
        setQuery("");
      },
      clearQuery: () => setQuery(""),
    }),
    [query, isOpen],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
