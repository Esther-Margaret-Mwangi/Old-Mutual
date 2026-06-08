import { useMemo } from "react";
import { Link } from "react-router-dom";
import SearchEmpty from "../components/SearchEmpty";
import { useSearch } from "../context/SearchContext";
import { accommodationTypes } from "../data/accommodationData";
import { matchesSearch } from "../utils/search";
import "../styles/Accommodation.css";

export default function Accommodation() {
  const { query } = useSearch();

  const types = useMemo(
    () =>
      accommodationTypes.filter((item) => matchesSearch(query, item.label, item.id)),
    [query],
  );

  return (
    <div className="ac-page">
      {types.length === 0 && <SearchEmpty />}
      {types.map((item) => (
        <Link
          key={item.id}
          to={`/accommodation/${item.id}`}
          className="ac-type-card"
        >
          <img src={item.image} alt={item.label} className="ac-type-image" />
          <div className="ac-type-overlay" />
          <h3>{item.label}</h3>
        </Link>
      ))}
    </div>
  );
}
