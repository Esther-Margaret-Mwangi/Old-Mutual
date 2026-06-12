import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SearchButton from "./components/SearchButton";
import { SearchProvider } from "./context/SearchContext";
import Home from "./pages/Home";
import Dine from "./pages/Dine";
import Events from "./pages/Events";
import Accommodation from "./pages/Accommodation";
import AccommodationList from "./pages/AccommodationList";
import AccommodationDetail from "./pages/AccommodationDetail";
import RestaurantDetail from "./pages/RestaurantDetail";
import EventDetail from "./pages/EventDetail";
import Placeholder from "./pages/Placeholder";
import Agenda from "./pages/Agenda";
import ActivityDetail from "./pages/ActivityDetail";
import AllPeople from "./pages/AllPeople";
import AllActivities from "./pages/AllActivities";
import About from "./pages/About";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
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
        <Route
          path="/all-activities"
          element={
            <div className="layout">
              <div className="app-shell app-shell--flush">
                <AllActivities />
              </div>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="layout">
              <div className="app-shell app-shell--flush">
                <About />
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
            <Layout
              pageTitle="Dine"
              searchable
              searchPlaceholder="Search restaurants and bars..."
              headerRight={<SearchButton />}
            >
              <Dine />
            </Layout>
          }
        />
        <Route path="/agenda" element={<Agenda />} />
        <Route
          path="/events"
          element={
            <Layout
              pageTitle="Events"
              searchable
              searchPlaceholder="Search events..."
              headerRight={<SearchButton />}
            >
              <Events />
            </Layout>
          }
        />
        <Route
          path="/accommodation"
          element={
            <Layout
              pageTitle="Accommodation"
              searchable
              searchPlaceholder="Search accommodation..."
              headerRight={<SearchButton />}
            >
              <Accommodation />
            </Layout>
          }
        />
      </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
