import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import peopleData from "../data/peopleData";
import { agendaSessions } from "../data/agendaData";
import { formatTimeRange } from "../utils/datetime";
import useHeroStatusTone from "../utils/useHeroStatusTone";
import "../styles/Profile.css";

const PROFILE_HERO_IMAGE =
  "https://res.cloudinary.com/dbo1334a9/image/upload/v1780400487/green-background_u0mw7x.jpg";

const allSessions = Object.values(agendaSessions).flat();

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  useHeroStatusTone(PROFILE_HERO_IMAGE);
  const person = peopleData.find((p) => String(p.id) === id);

  if (!person) {
    return (
      <div className="profile-not-found">
        <p>Person not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  const sessions = allSessions.filter((session) =>
    person.sessionIds?.includes(session.id),
  );

  return (
    <div className="profile-shell">
      <div
        className="profile-hero"
        style={{ backgroundImage: `url(${PROFILE_HERO_IMAGE})` }}
      >
        <button
          className="profile-back-btn"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <ArrowLeft size={18} />
        </button>

        <div className="profile-avatar">
          <img src={person.image} alt={person.name} />
        </div>
      </div>

      <div className="profile-fixed">
        <h1 className="profile-name">{person.name}</h1>
        {person.team && (
          <span className="profile-team-badge">{person.team}</span>
        )}
      </div>

      <div className="profile-scroll">
        <section className="profile-section">
          <p className="profile-bio">
            {person.description ||
              "Bio will appear once this speaker signs in to complete their profile."}
          </p>
        </section>

        {(person.email || person.phone) && (
          <div className="profile-contact">
            {person.email && (
              <a
                className="profile-contact-row"
                href={`mailto:${person.email}`}
              >
                <Mail size={18} />
                <span>{person.email}</span>
              </a>
            )}
            {person.phone && (
              <a
                className="profile-contact-row"
                href={`tel:${person.phone.replace(/\s+/g, "")}`}
              >
                <Phone size={18} />
                <span>{person.phone}</span>
              </a>
            )}
          </div>
        )}

        <section className="profile-section">
          <h3 className="profile-section-title">
            Sessions ({sessions.length})
          </h3>

          {sessions.length === 0 ? (
            <p className="profile-empty">
              Sessions will appear here once assigned.
            </p>
          ) : (
            <div className="profile-session-list">
              {sessions.map((session) => (
                <Link
                  key={session.id}
                  to={`/agenda/${session.id}`}
                  className="profile-session-card"
                >
                  <div
                    className="profile-session-stripe"
                    aria-hidden="true"
                  />
                  <div className="profile-session-body">
                    <h4>{session.title}</h4>
                    <ul className="profile-session-meta">
                      <li>
                        <Clock size={14} />
                        <span>
                          {formatTimeRange(session.startTime, session.endTime)}
                        </span>
                      </li>
                      <li>
                        <User size={14} />
                        <span>{session.audience}</span>
                      </li>
                      <li>
                        <MapPin size={14} />
                        <span>{session.location}</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
