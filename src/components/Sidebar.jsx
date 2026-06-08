import { NavLink } from "react-router-dom";
import {
  Home,
  Calendar,
  UtensilsCrossed,
  PartyPopper,
  BedDouble,
  X,
} from "lucide-react";
import "../styles/Sidebar.css";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "Agenda", path: "/agenda", icon: Calendar },
  { label: "Dine", path: "/dine", icon: UtensilsCrossed },
  { label: "Events", path: "/events", icon: PartyPopper },
  { label: "Accommodation", path: "/accommodation", icon: BedDouble },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <span className="sidebar-brand-name">Fairmont</span>
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
          {navItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={label}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "sidebar-link--active" : ""}`
              }
              onClick={onClose}
            >
              <Icon size={20} className="sidebar-link-icon" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
