import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SearchEmpty from "../components/SearchEmpty";
import { useSearch } from "../context/SearchContext";
import activities, { activityCategories } from "../data/activitiesData";
import { matchesSearch } from "../utils/search";
import "../styles/AllActivities.css";

const tabIcons = {
  "hotel-activities": "🏨",
  golf: "⛳",
  experiences: "✨",
};

export default function AllActivities() {
  const [activeTab, setActiveTab] = useState("hotel-activities");
  const { query } = useSearch();

  const items = useMemo(() => {
    return activities
      .filter((item) => item.category === activeTab)
      .filter((item) =>
        matchesSearch(query, item.title, item.description, item.category),
      );
  }, [activeTab, query]);

  return (
    <div className="all-activities">
      <div className="all-activities-tabs">
        {activityCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`all-activities-tab ${
              activeTab === category.id ? "all-activities-tab--active" : ""
            }`}
            onClick={() => setActiveTab(category.id)}
          >
            <span className="all-activities-tab-icon" aria-hidden="true">
              {tabIcons[category.id]}
            </span>
            {category.label}
          </button>
        ))}
      </div>

      <div className="all-activities-list">
        {items.length === 0 && <SearchEmpty />}
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/activity/${item.id}`}
            className="all-activities-card"
          >
            <img
              src={item.hero}
              alt={item.title}
              className="all-activities-card-img"
            />
            <div className="all-activities-card-overlay" />
            <div className="all-activities-card-copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
