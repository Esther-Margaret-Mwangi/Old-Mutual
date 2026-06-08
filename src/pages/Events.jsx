import { useMemo } from "react";
import { Link } from "react-router-dom";
import SearchEmpty from "../components/SearchEmpty";
import { useSearch } from "../context/SearchContext";
import eventsData from "../data/eventsData";
import { matchesSearch } from "../utils/search";
import "../styles/Events.css";

export default function Events() {
  const { query } = useSearch();

  const events = useMemo(
    () =>
      eventsData.filter((event) =>
        matchesSearch(
          query,
          event.title,
          event.cardDescription,
          event.description,
          event.heading,
        ),
      ),
    [query],
  );

  return (
    <div className="events">
      {events.length === 0 && <SearchEmpty />}
      {events.map((event) => (
        <Link key={event.id} to={`/event/${event.id}`} className="events-card">
          <img
            src={event.image}
            alt={event.title}
            className="events-card-img"
          />
          <div className="events-card-overlay" />
          <div className="events-card-copy">
            <h3>{event.title}</h3>
            <p>{event.cardDescription}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
