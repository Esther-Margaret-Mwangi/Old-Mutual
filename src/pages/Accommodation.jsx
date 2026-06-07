import { Link } from "react-router-dom";
import { accommodationTypes } from "../data/accommodationData";
import "../styles/Accommodation.css";

export default function Accommodation() {
  return (
    <div className="ac-page">
      {accommodationTypes.map((item) => (
        <Link
          key={item.id}
          to={`/accommodation/${item.id}`}
          className="ac-type-card"
        >
          <img src={item.image} alt={item.label} className="ac-type-image" />
          <div className="ac-type-overlay" />
          <h3>{item.label}</h3>
        </Link>
      ))}
    </div>
  );
}
