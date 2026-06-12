import FlushHeader from "../components/FlushHeader";
import "../styles/Feedback.css";

const TYPEFORM_URL = "https://stawiexperiences.typeform.com/omretreat2026";

export default function FeedbackForm() {
  return (
    <div className="feedback-form-page">
      <FlushHeader title="Give Feedback" sticky />
      <iframe
        className="feedback-form-iframe"
        src={TYPEFORM_URL}
        title="Event Feedback Form"
        allow="camera *; microphone *; autoplay *"
      />
    </div>
  );
}
