import "../styles/Home.css";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import experiences from "../data/experiences";
import peopleData from "../data/peopleData";

export default function Home() {
  const featuredExperiences = experiences.slice(0, 4);

  return (
    <div className="home-mobile">
      <section className="home-hero-card">
        <div className="home-hero-pills">
          <span>
            <MapPin size={13} /> Location
          </span>
        </div>
        <div className="home-hero-gradient" />
        <div className="home-hero-copy">
          <h2>Fairmont Mount Kenya Safari Club</h2>
          <p>
            At the foothills of majestic Mount Kenya, Fairmont Mount Kenya
            Safari Club offers more than a stay it’s a soulful return to nature.
            Within the Mount Kenya Wildlife Conservancy, witness firsthand the
            rewilding of the critically endangered Mountain Bongo and visit the
            on-site Wildlife Rescue Center. From horseback safaris to forest
            trails, every moment invites you to reconnect, reflect, and help
            leave a legacy of conservation wrapped in Fairmont’s iconic charm
            and quiet luxury.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <h3 className="home-section-title">Sales Team</h3>
          <Link to="/all-people" className="home-section-link">
            See more
          </Link>
        </div>

        <div className="facilitator-list">
          {peopleData.slice(0, 3).map((person) => (
            <article key={person.id} className="facilitator-item">
              <img src={person.image} alt={person.name} />
              <div>
                <h4>{person.name}</h4>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <h3 className="home-section-title">Things To Look Forward To</h3>
          <Link to="/all-activities" className="home-section-link">
            See more
          </Link>
        </div>

        <div className="home-grid">
          {featuredExperiences.map((item) => (
            <article key={item.id} className="home-grid-card">
              <div
                className="home-grid-image"
                style={{ backgroundImage: `url(${item.hero})` }}
              />
              <div className="home-grid-body">
                <div className="home-grid-row">
                  <h4>{item.title}</h4>
                  <Link to={`/activity/${item.id}`} className="home-grid-cta">
                    See more
                  </Link>
                </div>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
