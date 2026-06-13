import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock, MapPin } from "lucide-react";
import { agendaSessions, eventDates } from "../data/agendaData";
import peopleData from "../data/peopleData";
import { formatTimeRange } from "../utils/datetime";
import useHeroStatusTone from "../utils/useHeroStatusTone";
import "../styles/AgendaDetail.css";

const AGENDA_HERO_IMAGE =
  "https://res.cloudinary.com/dbo1334a9/image/upload/v1780400487/green-background_u0mw7x.jpg";

const allSessions = Object.entries(agendaSessions).flatMap(([iso, sessions]) =>
  sessions.map((session) => ({ ...session, dateIso: iso })),
);

export default function AgendaDetail() {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  useHeroStatusTone(AGENDA_HERO_IMAGE);

  const session = allSessions.find((item) => item.id === sessionId);

  if (!session) {
    return (
      <div className="agd-not-found">
        <p>Session not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  const eventDate = eventDates.find((date) => date.iso === session.dateIso);
  const speakers = peopleData.filter((person) =>
    person.sessionIds?.includes(session.id),
  );

  return (
    <div className="agd-shell">
      <div
        className="agd-hero"
        style={{ backgroundImage: `url(${AGENDA_HERO_IMAGE})` }}
      >
        <button
          className="agd-back-btn"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <ArrowLeft size={18} />
        </button>

        <h1 className="agd-hero-title">Agenda Details</h1>
      </div>

      <div className="agd-card">
        <div className="agd-card-top">
          <h2 className="agd-card-title">{session.title}</h2>
        </div>

        <div className="agd-meta">
          <p className="agd-meta-row">
            <Clock size={16} />
            <span>
              {eventDate?.label} | {formatTimeRange(session.startTime, session.endTime)}
            </span>
          </p>
          <p className="agd-meta-row">
            <MapPin size={16} />
            <span>{session.location}</span>
          </p>
        </div>
      </div>

      <div className="agd-content">
        <section className="agd-section">
          <h3 className="agd-section-title">Description</h3>
          <div className="agd-desc">
            <p>
              {session.description ||
                "Details for this session will be shared closer to the event."}
            </p>
            {session.leadBy && <p>Led by: {session.leadBy}</p>}
          </div>
        </section>

        <section className="agd-section">
          <h3 className="agd-section-title">Speakers</h3>

          <div className="agd-speaker-list">
            {speakers.length === 0 ? (
              <div className="agd-speaker-item">
                <div className="agd-speaker-avatar">S</div>
                <div>
                  <p className="agd-speaker-name">Speaker To Be Announced</p>
                  <p className="agd-speaker-role">Session speaker</p>
                </div>
              </div>
            ) : (
              speakers.map((person) => (
                <Link
                  key={person.id}
                  to={`/profile/${person.id}`}
                  className="agd-speaker-item"
                >
                  <div className="agd-speaker-avatar">
                    <img src={person.image} alt={person.name} />
                  </div>
                  <div>
                    <p className="agd-speaker-name">{person.name}</p>
                    {person.team && (
                      <p className="agd-speaker-role">{person.team}</p>
                    )}
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
