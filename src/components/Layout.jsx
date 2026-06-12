import { useState } from "react";
import { Menu } from "lucide-react";
import SearchPanel from "./SearchPanel";
import Sidebar from "./Sidebar";
import logoImage from "../assets/images/flogo1.jpeg";
import "../styles/Layout.css";

export default function Layout({
  children,
  pageTitle = "Welcome!",
  pageSubtitle,
  headerRight,
  searchable = false,
  searchPlaceholder,
  subHeader,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <div className="app-shell">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <header className="topbar">
          <button
            className="topbar-menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          <div className="topbar-copy">
            <h1>{pageTitle}</h1>
            {pageSubtitle && <p className="topbar-subtitle">{pageSubtitle}</p>}
          </div>

          <div className="topbar-logo">
            {headerRight ?? <img src={logoImage} alt="Fairmont logo" />}
          </div>
        </header>

        {searchable && <SearchPanel placeholder={searchPlaceholder} />}

        {subHeader && <div className="layout-subheader">{subHeader}</div>}

        <main className="layout-main">{children}</main>
      </div>
    </div>
  );
}
