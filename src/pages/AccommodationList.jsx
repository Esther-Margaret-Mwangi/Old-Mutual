import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  Bed,
  Ruler,
  UserRound,
  Mountain,
} from "lucide-react";
import {
  accommodationTypes,
  accommodationUnits,
} from "../data/accommodationData";
import "../styles/AccommodationList.css";

export default function AccommodationList() {
  const { typeId } = useParams();
  const navigate = useNavigate();

  const type = accommodationTypes.find((item) => item.id === typeId);
  const units = accommodationUnits[typeId] || [];

  if (!type) {
    return (
      <div className="acl-not-found">
        <p>Accommodation type not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  return (
    <div className="acl-page">
      <header className="acl-header">
        <button
          className="acl-icon-btn"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <ArrowLeft size={18} />
        </button>
        <h1>{type.label.charAt(0) + type.label.slice(1).toLowerCase()}</h1>
        <button className="acl-icon-btn" aria-label="Search">
          <Search size={18} />
        </button>
      </header>

      <div className="acl-list">
        {units.map((unit) => (
          <article key={unit.id} className="acl-card">
            <img src={unit.image} alt={unit.name} className="acl-card-image" />
            <div className="acl-card-body">
              <h3>{unit.name}</h3>
              <p>
                <Bed size={14} /> {unit.bed}
              </p>
              <p>
                <Ruler size={14} /> {unit.size}
              </p>
              <div className="acl-meta-row">
                <p>
                  <UserRound size={14} /> {unit.persons}
                </p>
                {unit.extra ? (
                  <p>
                    <Mountain size={14} /> {unit.extra}
                  </p>
                ) : null}
              </div>
              <Link
                to={`/accommodation/${typeId}/${unit.id}`}
                className="acl-detail-btn"
              >
                See Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
