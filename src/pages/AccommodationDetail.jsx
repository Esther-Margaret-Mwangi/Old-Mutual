import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Bed, Ruler, UserRound } from "lucide-react";
import { accommodationUnits } from "../data/accommodationData";
import "../styles/AccommodationDetail.css";

export default function AccommodationDetail() {
  const { typeId, unitId } = useParams();
  const navigate = useNavigate();

  const unit = (accommodationUnits[typeId] || []).find(
    (item) => item.id === unitId,
  );

  if (!unit) {
    return (
      <div className="acd-not-found">
        <p>Accommodation not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  return (
    <div className="acd-shell">
      <div className="acd-hero">
        <img src={unit.image} alt={unit.name} className="acd-hero-img" />
        <button
          className="acd-back-btn"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <ArrowLeft size={18} />
        </button>
        <span className="acd-hero-pill">Room</span>
      </div>

      <div className="acd-content">
        <h1>{unit.name.toUpperCase()}</h1>
        <p className="acd-desc">{unit.description}</p>

        <ul className="acd-facts">
          <li>
            <Bed size={15} /> {unit.bed}
          </li>
          <li>
            <Ruler size={15} /> {unit.size}
          </li>
          <li>
            <UserRound size={15} /> {unit.persons}
          </li>
        </ul>

        <div className="acd-chip-panel">
          {unit.chips.map((chip) => (
            <span key={chip} className="acd-chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
