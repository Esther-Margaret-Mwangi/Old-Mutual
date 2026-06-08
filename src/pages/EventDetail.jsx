import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import eventsData from "../data/eventsData";
import useHeroStatusTone from "../utils/useHeroStatusTone";
import "../styles/EventDetail.css";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = eventsData.find((item) => item.id === id);
  const heroTone = useHeroStatusTone(event?.image);

  if (!event) {
    return (
      <div className="ed-not-found">
        <p>Event not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  return (
    <div className="ed-shell" data-status-tone={heroTone}>
      <div className="ed-hero">
        <img src={event.image} alt={event.title} className="ed-hero-img" />

        <button
          className="ed-back-btn"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <ArrowLeft size={18} />
        </button>

        <span className="ed-hero-pill">{event.heroLabel}</span>
      </div>

      <div className="ed-content">
        <h1 className="ed-title">{event.heading}</h1>

        <p className="ed-desc">{event.description}</p>

        <ul className="ed-highlights">
          {event.highlights.map((point) => (
            <li key={point}>
              <CheckCircle2 size={16} />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <section className="ed-section">
          <h2>{event.exploreTitle}</h2>
          <p>{event.exploreDescription}</p>
        </section>

        <div className="ed-venue-grid">
          {event.venueCards.map((venue) => (
            <article key={venue.name} className="ed-venue-card">
              <img src={venue.image} alt={venue.name} />
              <p>{venue.name}</p>
            </article>
          ))}
        </div>

        <div className="ed-chip-panel">
          {event.chips.map((chip) => (
            <span key={chip} className="ed-chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
