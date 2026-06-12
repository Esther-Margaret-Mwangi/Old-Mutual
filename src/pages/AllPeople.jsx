import { useMemo } from "react";
import { Link } from "react-router-dom";
import FlushHeader from "../components/FlushHeader";
import SearchButton from "../components/SearchButton";
import SearchEmpty from "../components/SearchEmpty";
import SearchPanel from "../components/SearchPanel";
import { useSearch } from "../context/SearchContext";
import peopleData from "../data/peopleData";
import { matchesSearch } from "../utils/search";
import "../styles/AllPeople.css";

export default function AllPeople() {
  const { query } = useSearch();

  const people = useMemo(
    () => peopleData.filter((person) => matchesSearch(query, person.name)),
    [query],
  );

  return (
    <div className="flush-page all-people-page">
      <FlushHeader
        title="Key People"
        right={<SearchButton className="flush-header-btn" />}
      />

      <div className="all-people-scroll">
        <SearchPanel
          placeholder="Search people..."
          wrapperClassName="flush-search"
        />

        <section className="all-people-list">
          {people.length === 0 && <SearchEmpty />}
          {people.map((person) => (
            <Link
              key={person.id}
              to={`/profile/${person.id}`}
              className="all-people-item"
            >
              <img src={person.image} alt={person.name} />
              <h2>{person.name}</h2>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
