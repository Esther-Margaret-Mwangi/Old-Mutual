import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Image } from "lucide-react";
import activities from "../data/activitiesData";
import useHeroStatusTone from "../utils/useHeroStatusTone";
import "../styles/ActivityDetail.css";

export default function ActivityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const activity = activities.find((item) => item.id === id);
  const heroTone = useHeroStatusTone(activity?.hero);

  if (!activity) {
    return (
      <div className="act-not-found">
        <p>Activity not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  return (
    <div className="act-shell" data-status-tone={heroTone}>
      {/* ── Hero ── */}
      <div className="act-hero">
        <img
          src={activity.hero}
          alt={activity.title}
          className="act-hero-img"
        />

        {/* floating controls */}
        <button
          className="act-fab act-fab--back"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <ArrowLeft size={18} />
        </button>

        <h1 className="act-hero-title">{activity.title}</h1>

        <button
          className={`act-fab act-fab--heart ${liked ? "act-fab--liked" : ""}`}
          onClick={() => setLiked((v) => !v)}
          aria-label="Favourite"
        >
          <Heart size={18} fill={liked ? "currentColor" : "none"} />
        </button>
      </div>

      {/* ── Content ── */}
      <div className="act-content">
        <h2 className="act-name">{activity.title}</h2>

        <p className="act-desc">{activity.description}</p>

        {(activity.gallery?.length ?? 0) > 0 && (
          <>
            <div className="act-gallery-heading">
              <Image size={15} />
              <span>Photo Gallery</span>
            </div>

            <div className="act-gallery">
              {activity.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${activity.title} photo ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
