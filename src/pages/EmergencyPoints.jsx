import { useState } from "react";
import { AlertTriangle, Phone } from "lucide-react";
import Layout from "../components/Layout";
import "../styles/InfoCenter.css";
import "../styles/EmergencyPoints.css";

const EMERGENCY_TEL = "+254711032000";
const EMERGENCY_DISPLAY = "+254 711 032 000";

const MEETING_POINT_IMAGE =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80";
const HEMINGWAYS_IMAGE =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80";

export default function EmergencyPoints() {
  const [activeCall, setActiveCall] = useState(null);

  return (
    <Layout
      pageTitle="Emergency Points"
      headerRight={<span aria-hidden="true" />}
    >
      <div className="emp-page">
        <section className="info-emergency-card">
          <div className="info-emergency-header">
            <div className="info-emergency-icon">
              <AlertTriangle size={22} />
            </div>
            <h2 className="info-emergency-title">Emergency</h2>
          </div>
          <p className="info-emergency-text">
            In case of emergency, contact the event coordinator immediately or
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

        <h2 className="emp-section-title">Emergency Maps</h2>
        <div className="emp-card">
          <h3 className="emp-card-title">Emergency Meeting Point</h3>
          <div className="emp-card-image">
            <img src={MEETING_POINT_IMAGE} alt="Emergency Meeting Point" />
          </div>
        </div>

        <h2 className="emp-section-title">Emergency Points</h2>
        <p className="emp-text">
          There are currently no designated on-site emergency points listed
          for this venue. If you need urgent assistance, call the emergency
          number at the top of this page immediately and notify the event
          team.
        </p>

        <div className="emp-card">
          <div className="emp-card-header">
            <div className="emp-card-icon">
              <AlertTriangle size={16} />
            </div>
            <h3 className="emp-card-heading">Hemingways Reception</h3>
          </div>
          <div className="emp-card-image">
            <img src={HEMINGWAYS_IMAGE} alt="Hemingways Reception" />
          </div>
        </div>
      </div>

      {activeCall && (
        <div
          className="info-call-overlay"
          onClick={() => setActiveCall(null)}
        >
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
