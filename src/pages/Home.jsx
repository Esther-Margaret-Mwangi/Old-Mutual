import "../styles/Home.css";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import peopleData from "../data/peopleData";

export default function Home() {
  return (
    <div className="home-mobile">
      <section className="home-hero-card">
        <div className="home-hero-pills">
          <span>
            <MapPin size={13} /> Event
          </span>
        </div>
        <div className="home-hero-gradient" />
        <div className="home-hero-copy">
          <h2>Old Mutual Board Retreat</h2>
          <p>
            Through collaboration, strategic leadership, and a shared vision, we
            champion Accelerated Transformation to unlock new opportunities,
            strengthen our competitive edge, and deliver lasting impact
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <h3 className="home-section-title">Speakers</h3>
          {/*<Link to="/all-people" className="home-section-link">
            See more
          </Link>*/}
        </div>

        <div className="facilitator-list">
          {peopleData.slice(0, 3).map((person) => (
            <Link
              key={person.id}
              to={`/profile/${person.id}`}
              className="facilitator-item"
            >
              <img src={person.image} alt={person.name} />
              <div>
                <h4>{person.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
