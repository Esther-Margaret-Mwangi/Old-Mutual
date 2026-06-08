import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import peopleData from "../data/peopleData";
import "../styles/AllPeople.css";

export default function AllPeople() {
  const navigate = useNavigate();

  return (
    <div className="all-people-page">
      <header className="all-people-header">
        <button
          className="all-people-back"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <ArrowLeft size={18} />
        </button>
        <h1>Facilitators</h1>
      </header>

      <section className="all-people-list">
        {peopleData.map((person) => (
          <article key={person.id} className="all-people-item">
            <img src={person.image} alt={person.name} />
            <h2>{person.name}</h2>
          </article>
        ))}
      </section>
    </div>
  );
}
