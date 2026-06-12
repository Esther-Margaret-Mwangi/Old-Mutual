import { Link } from "react-router-dom";
import { CheckCircle, MessageSquareMore } from "lucide-react";
import Layout from "../components/Layout";
import "../styles/Feedback.css";

export default function Feedback() {
  return (
    <Layout
      pageTitle="Feedback"
      pageSubtitle="Share your experience with us"
      headerRight={<span aria-hidden="true" />}
    >
      <section className="feedback-card">
        <div className="feedback-icon">
          <MessageSquareMore size={36} />
        </div>

        <h2 className="feedback-title">We Value your Feedback</h2>

        <p className="feedback-desc">
          Your insights help us improve future events and create better team
          building experiences for everyone.
        </p>

        <ul className="feedback-checklist">
          <li>
            <CheckCircle size={20} />
            <span>Share your favorite moments from the event.</span>
          </li>
          <li>
            <CheckCircle size={20} />
            <span>Tell us about your app experience.</span>
          </li>
          <li>
            <CheckCircle size={20} />
            <span>Tell us what we can improve</span>
          </li>
        </ul>

        <Link to="/feedback/form" className="feedback-cta">
          Give Feedback
        </Link>
      </section>
    </Layout>
  );
}
