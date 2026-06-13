import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpDown,
  Calendar,
  Clock,
  MapPin,
  User,
} from "lucide-react";
import Layout from "../components/Layout";
import SearchButton from "../components/SearchButton";
import SearchEmpty from "../components/SearchEmpty";
import { useSearch } from "../context/SearchContext";
import { agendaSessions, eventDates } from "../data/agendaData";
import peopleData from "../data/peopleData";
import { matchesSearch } from "../utils/search";
import { formatTime, formatTimeRange } from "../utils/datetime";
import "../styles/Agenda.css";

function getTodayIso() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

export default function Agenda() {
  const [sortEarliest, setSortEarliest] = useState(true);
  const [selectedDateIso, setSelectedDateIso] = useState(() => {
    const todayIso = getTodayIso();
    return eventDates.some((date) => date.iso === todayIso)
      ? todayIso
      : eventDates[0].iso;
  });
  const { query } = useSearch();

  const eventDate =
    eventDates.find((date) => date.iso === selectedDateIso) ?? eventDates[0];

  const sessions = useMemo(() => {
    const sorted = [...(agendaSessions[selectedDateIso] ?? [])]
      .filter((session) =>
        matchesSearch(
          query,
          session.title,
          session.location,
          session.audience,
        ),
      )
      .sort((a, b) => a.startTime.localeCompare(b.startTime));

    return sortEarliest ? sorted : sorted.reverse();
  }, [sortEarliest, query, selectedDateIso]);

  return (
    <Layout
      pageTitle="Agenda"
      pageSubtitle="Today's Schedule"
      searchable
      searchPlaceholder="Search sessions..."
      headerRight={
        <div className="agenda-topbar-actions">
          <SearchButton />
          <button
            type="button"
            className="agenda-sort-btn"
            onClick={() => setSortEarliest((value) => !value)}
          >
            <ArrowUpDown size={14} />
            <span>{sortEarliest ? "Earliest" : "Latest"}</span>
          </button>
        </div>
      }
      subHeader={
        <div className="agenda-sticky">
          <div className="agenda-dates" aria-label="Event date">
            {eventDates.map((date) => (
              <button
                key={date.iso}
                type="button"
                className={`agenda-date ${
                  date.iso === selectedDateIso ? "agenda-date--active" : ""
                }`}
                aria-pressed={date.iso === selectedDateIso}
                onClick={() => setSelectedDateIso(date.iso)}
              >
                <span className="agenda-date-day">{date.day}</span>
                <span className="agenda-date-label">{date.weekday}</span>
              </button>
            ))}
          </div>

          <section className="agenda-summary">
            <div className="agenda-summary-top">
              <p className="agenda-summary-date">
                <Calendar size={15} />
                <span>{eventDate.label}</span>
              </p>
              <button type="button" className="agenda-filter-btn">
                Everyone
              </button>
            </div>
            <p className="agenda-summary-count">
              {sessions.length} sessions scheduled
            </p>
          </section>
        </div>
      }
    >
      <div className="agenda-list">
        {sessions.length === 0 && <SearchEmpty />}
        {sessions.map((session) => {
          const speakers = peopleData.filter((person) =>
            person.sessionIds?.includes(session.id),
          );

          return (
            <Link
              key={session.id}
              to={`/agenda/${session.id}`}
              className="agenda-item"
            >
              <time className="agenda-item-time" dateTime={session.startTime}>
                {formatTime(session.startTime)}
              </time>

              <div className="agenda-card">
                <div className="agenda-card-stripe" aria-hidden="true" />

                <div className="agenda-card-body">
                  <h2 className="agenda-card-title">{session.title}</h2>

                  <ul className="agenda-card-meta">
                    <li>
                      <Clock size={14} />
                      <span>
                        {formatTimeRange(session.startTime, session.endTime)}
                      </span>
                    </li>
                    <li>
                      <User size={14} />
                      <span>
                        {speakers.length > 0
                          ? speakers.map((person) => person.name).join(", ")
                          : `Facilitator ${session.facilitator}`}
                      </span>
                    </li>
                    <li>
                      <MapPin size={14} />
                      <span>{session.location}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
