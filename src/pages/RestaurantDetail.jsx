import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import dineData from "../data/dineData";
import useHeroStatusTone from "../utils/useHeroStatusTone";
import "../styles/RestaurantDetail.css";

export default function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isBarPage = pathname.startsWith("/bar/");
  const source = isBarPage ? dineData.bars : dineData.restaurants;
  const fallback = [...dineData.restaurants, ...dineData.bars];
  const venue =
    source.find((v) => v.id === id) || fallback.find((v) => v.id === id);
  const heroTone = useHeroStatusTone(venue?.image);

  if (!venue) {
    return (
      <div className="rd-not-found">
        <p>Venue not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  return (
    <div className="rd-shell" data-status-tone={heroTone}>
      {/* ── Hero ── */}
      <div className="rd-hero">
        <img src={venue.image} alt={venue.name} className="rd-hero-img" />

        <button
          className="rd-back-btn"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <ArrowLeft size={18} />
        </button>

        <span className="rd-hero-label">
          {isBarPage ? "Bar" : "Restaurant"}
        </span>
      </div>

      {/* ── Content ── */}
      <div className="rd-content">
        <h1 className="rd-name">{venue.name.toUpperCase()}</h1>

        <p className="rd-subtitle">
          <span className="rd-subtitle-icon">{isBarPage ? "🍷" : "🍽"}</span>
          {venue.subtitle}
        </p>

        <p className="rd-desc">{venue.description}</p>

        {/* ── Tags ── */}
        <div className="rd-tags">
          {venue.tags.map((tag) => (
            <span key={tag} className="rd-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
