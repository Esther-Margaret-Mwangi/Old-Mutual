import { useState } from "react";
import { Menu } from "lucide-react";
import SearchPanel from "./SearchPanel";
import Sidebar from "./Sidebar";
import "../styles/Layout.css";

const logoImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70rQbh9JzKxY_tkMl1D3Yk8sfTzOMVPNf5O3fIOIH9UP9YQD1x5IOeBI&s=10";

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
            {headerRight ?? <img src={logoImage} alt="Old Mutual logo" />}
          </div>
        </header>

        {searchable && <SearchPanel placeholder={searchPlaceholder} />}

        {subHeader && <div className="layout-subheader">{subHeader}</div>}

        <main className="layout-main">{children}</main>
      </div>
    </div>
  );
}
