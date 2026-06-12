import { useState } from "react";
import { Menu, Mail } from "lucide-react";
import Sidebar from "../components/Sidebar";
import bendieLogo from "../assets/Bendielogo.jpeg";
import "../styles/About.css";

export default function About() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flush-page about-page">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <header className="about-header">
        <button
          type="button"
          className="about-menu-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
        <h1>About</h1>
        <span aria-hidden="true" />
      </header>

      <div className="about-hero">
        <div className="about-icon">
          <img src={bendieLogo} alt="Bendie Event App icon" />
        </div>
        <h2 className="about-app-name">Bendie </h2>
        <p className="about-app-tagline">Your all-in-one event companion</p>
      </div>

      <section className="about-card">
        <h3 className="about-card-title">About the App</h3>
        <p>
          Bendie is the official digital platform for events powered by Stawi
          Experiences. Whether it's a corporate offsite, team-building retreat,
          or industry gathering, Bendie puts everything you need right at your
          fingertips.
        </p>
        <p>
          From session schedules and facilitator profiles to real-time
          networking and live updates, Bendie is designed to enhance every
          attendee's experience from start to finish.
        </p>
      </section>

      <section className="about-card">
        <h3 className="about-card-title">Contact &amp; Support</h3>
        <p>
          For technical support or enquiries about the platform, reach out to
          our team.
        </p>
        <a
          className="about-contact-btn"
          href="mailto:bendie@stawiexperiences.com"
        >
          <Mail size={18} />
          <span>bendie@stawiexperiences.com</span>
        </a>
      </section>

      <p className="about-footer">© 2026 Bendie · Built by Stawi Experiences</p>
    </div>
  );
}
