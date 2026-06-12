import { NavLink } from "react-router-dom";
import {
  Home,
  Calendar,
  Camera,
  HelpCircle,
  MessageSquare,
  Info,
  AlertTriangle,
  X,
} from "lucide-react";
import logoImage from "../assets/images/flogo1.jpeg";
import "../styles/Sidebar.css";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "Agenda", path: "/agenda", icon: Calendar },
  { label: "Event Photos", path: "/event-photos", icon: Camera },
  { label: "Help / FAQs", path: "/help", icon: HelpCircle },
  { label: "Feedback", path: "/feedback", icon: MessageSquare },
  { label: "Info Center", path: "/info-center", icon: Info },
  {
    label: "Emergency Points",
    path: "/emergency-points",
    icon: AlertTriangle,
    danger: true,
  },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <img
              src={logoImage}
              alt="Old Mutual"
              className="sidebar-brand-logo"
            />
            <span className="sidebar-brand-name">Old Mutual</span>
          </div>
          <button
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(({ label, path, icon: Icon, danger }) => (
            <NavLink
              key={label}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `sidebar-link ${danger ? "sidebar-link--danger" : ""} ${
                  isActive ? "sidebar-link--active" : ""
                }`
              }
              onClick={onClose}
            >
              <Icon size={20} className="sidebar-link-icon" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>Powered by Stawi Experiences</p>
        </div>
      </aside>
    </>
  );
}
