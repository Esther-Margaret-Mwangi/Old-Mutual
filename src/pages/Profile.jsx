import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import peopleData from "../data/peopleData";
import heroBg from "../assets/images/bg1.jpeg";
import useHeroStatusTone from "../utils/useHeroStatusTone";
import "../styles/Profile.css";

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  useHeroStatusTone(heroBg);
  const person = peopleData.find((p) => String(p.id) === id);

  if (!person) {
    return (
      <div className="profile-not-found">
        <p>Person not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  return (
    <div className="profile-shell">
      <div
        className="profile-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
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

      <div className="profile-content">
        <h1 className="profile-name">{person.name}</h1>
        {person.team && (
          <span className="profile-team-badge">{person.team}</span>
        )}
        {person.description && (
          <p className="profile-desc">{person.description}</p>
        )}

        <div className="profile-contact">
          {person.email && (
            <a className="profile-contact-row" href={`mailto:${person.email}`}>
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
      </div>
    </div>
  );
}
