import { useState } from "react";
import { AlertTriangle, Phone, User } from "lucide-react";
import Layout from "../components/Layout";
import "../styles/InfoCenter.css";

const EMERGENCY_TEL = "+254711032000";
const EMERGENCY_DISPLAY = "+254 711 032 000";

const contacts = [
  {
    id: "event-coordinators",
    sectionTitle: "Event Coordinators",
    name: "Abigael",
    email: "abigael@stawiexperiences.com",
    tel: "+254729017311",
    display: "+254 729 017 311",
  },
  {
    id: "hotel-reception",
    sectionTitle: "Hotel Reception",
    name: "Hemingways Reception",
    email: "reception.nairobi@hemingways.co",
    tel: EMERGENCY_TEL,
    display: EMERGENCY_DISPLAY,
  },
];

export default function InfoCenter() {
  const [activeCall, setActiveCall] = useState(null);

  return (
    <Layout pageTitle="Info" headerRight={<span aria-hidden="true" />}>
      <div className="info-page">
        <section className="info-emergency-card">
          <div className="info-emergency-header">
            <div className="info-emergency-icon">
              <AlertTriangle size={22} />
            </div>
            <h2 className="info-emergency-title">Emergency</h2>
          </div>
          <p className="info-emergency-text">
            In case of emergency contact the event coordinator immediately or
            call emergency services.
          </p>
          <button
            type="button"
            className="info-emergency-cta"
            onClick={() =>
              setActiveCall({ tel: EMERGENCY_TEL, display: EMERGENCY_DISPLAY })
            }
          >
            <Phone size={18} />
            <span>Emergency Call</span>
          </button>
        </section>

        <h2 className="info-section-title">Information Center</h2>

        <p className="info-intro-text">
          Welcome to our Information Center. Here you&apos;ll find all the
          essential contacts and resources to make your event experience
          seamless. Our dedicated team is ready to assist you with any questions
          or requests.
        </p>

        <h2 className="info-section-title">Key Contacts</h2>

        {contacts.map((contact) => (
          <section key={contact.id} className="info-contact-card">
            <h3 className="info-contact-card-title">{contact.sectionTitle}</h3>
            <div className="info-contact-row">
              <div className="info-contact-avatar">
                <User size={20} />
              </div>
              <div className="info-contact-details">
                <span className="info-contact-name">{contact.name}</span>
                <span className="info-contact-email">{contact.email}</span>
              </div>
              <button
                type="button"
                className="info-call-btn"
                onClick={() => setActiveCall(contact)}
              >
                <Phone size={13} />
                <span>Call</span>
              </button>
            </div>
          </section>
        ))}
      </div>

      {activeCall && (
        <div className="info-call-overlay" onClick={() => setActiveCall(null)}>
          <div
            className="info-call-sheet"
            onClick={(event) => event.stopPropagation()}
          >
            <a href={`tel:${activeCall.tel}`} className="info-call-sheet-btn">
              Call {activeCall.display}
            </a>
            <button
              type="button"
              className="info-call-sheet-cancel"
              onClick={() => setActiveCall(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
