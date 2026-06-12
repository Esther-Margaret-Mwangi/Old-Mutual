import { Camera } from "lucide-react";
import "../styles/EventPhotos.css";

const EVENT_PHOTOS_IMAGE =
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80";
const EVENT_PHOTOS_LINK = "https://stawi.pixieset.com/omboardstrategyretreat2026/";

export default function EventPhotos() {
  return (
    <div className="ep-page">
      <a
        className="ep-hero"
        href={EVENT_PHOTOS_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={EVENT_PHOTOS_IMAGE} alt="Event photos" />
      </a>

      <p className="ep-desc">
        This tab brings the event to life! See photos uploaded live,
        capturing all the key moments. Relive the event and share your
        experience with ease!
      </p>

      <a
        className="ep-cta"
        href={EVENT_PHOTOS_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Camera size={20} />
        <span>Event Photos</span>
      </a>
    </div>
  );
}
