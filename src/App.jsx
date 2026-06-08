import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Search } from "lucide-react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Dine from "./pages/Dine";
import Events from "./pages/Events";
import Accommodation from "./pages/Accommodation";
import AccommodationList from "./pages/AccommodationList";
import AccommodationDetail from "./pages/AccommodationDetail";
import RestaurantDetail from "./pages/RestaurantDetail";
import EventDetail from "./pages/EventDetail";
import Placeholder from "./pages/Placeholder";
import ActivityDetail from "./pages/ActivityDetail";
import AllPeople from "./pages/AllPeople";
import "./styles/App.css";

const searchBtn = (
  <button className="topbar-search-btn" aria-label="Search">
    <Search size={17} />
  </button>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Full-screen detail pages — no Layout header */}
        <Route
          path="/activity/:id"
          element={
            <div className="layout">
              <div className="app-shell app-shell--flush">
                <ActivityDetail />
              </div>
            </div>
          }
        />
        <Route
          path="/restaurant/:id"
          element={
            <div className="layout">
              <div className="app-shell app-shell--flush">
                <RestaurantDetail />
              </div>
            </div>
          }
        />
        <Route
          path="/bar/:id"
          element={
            <div className="layout">
              <div className="app-shell app-shell--flush">
                <RestaurantDetail />
              </div>
            </div>
          }
        />
        <Route
          path="/event/:id"
          element={
            <div className="layout">
              <div className="app-shell app-shell--flush">
                <EventDetail />
              </div>
            </div>
          }
        />
        <Route
          path="/accommodation/:typeId"
          element={
            <div className="layout">
              <div className="app-shell app-shell--flush">
                <AccommodationList />
              </div>
            </div>
          }
        />
        <Route
          path="/accommodation/:typeId/:unitId"
          element={
            <div className="layout">
              <div className="app-shell app-shell--flush">
                <AccommodationDetail />
              </div>
            </div>
          }
        />
        <Route
          path="/all-people"
          element={
            <div className="layout">
              <div className="app-shell app-shell--flush">
                <AllPeople />
              </div>
            </div>
          }
        />

        {/* Pages — each has exactly one Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/dine"
          element={
            <Layout pageTitle="Dine" headerRight={searchBtn}>
              <Dine />
            </Layout>
          }
        />
        <Route
          path="/agenda"
          element={
            <Layout pageTitle="Agenda">
              <Placeholder title="Agenda" />
            </Layout>
          }
        />
        <Route
          path="/events"
          element={
            <Layout pageTitle="Events" headerRight={searchBtn}>
              <Events />
            </Layout>
          }
        />
        <Route
          path="/accommodation"
          element={
            <Layout pageTitle="Accommodation" headerRight={searchBtn}>
              <Accommodation />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
