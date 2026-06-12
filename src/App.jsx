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
import Help from "./pages/Help";
import Feedback from "./pages/Feedback";
import FeedbackForm from "./pages/FeedbackForm";
import InfoCenter from "./pages/InfoCenter";
import Agenda from "./pages/Agenda";
import AgendaDetail from "./pages/AgendaDetail";
import ActivityDetail from "./pages/ActivityDetail";
import AllPeople from "./pages/AllPeople";
import AllActivities from "./pages/AllActivities";
import About from "./pages/About";
import Profile from "./pages/Profile";
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
          path="/agenda/:sessionId"
          element={
            <div className="layout">
              <div className="app-shell app-shell--flush">
                <AgendaDetail />
              </div>
            </div>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <div className="layout">
              <div className="app-shell app-shell--flush">
                <Profile />
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
        <Route path="/dine" element={<Dine />} />
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

        {/* New sidebar sections — coming soon */}
        <Route
          path="/gallery"
          element={
            <Layout pageTitle="Gallery">
              <Placeholder title="Gallery" />
            </Layout>
          }
        />
        <Route
          path="/networking"
          element={
            <Layout pageTitle="Networking">
              <Placeholder title="Networking" />
            </Layout>
          }
        />
        <Route
          path="/chats"
          element={
            <Layout pageTitle="Chats">
              <Placeholder title="Chats" />
            </Layout>
          }
        />
        <Route
          path="/notifications"
          element={
            <Layout pageTitle="Notifications">
              <Placeholder title="Notifications" />
            </Layout>
          }
        />
        <Route
          path="/event-photos"
          element={
            <Layout pageTitle="Event Photos">
              <Placeholder title="Event Photos" />
            </Layout>
          }
        />
        <Route path="/help" element={<Help />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route
          path="/feedback/form"
          element={
            <div className="layout">
              <div className="app-shell app-shell--flush">
                <FeedbackForm />
              </div>
            </div>
          }
        />
        <Route path="/info-center" element={<InfoCenter />} />
        <Route
          path="/settings"
          element={
            <Layout pageTitle="Settings">
              <Placeholder title="Settings" />
            </Layout>
          }
        />
        <Route
          path="/emergency-points"
          element={
            <Layout pageTitle="Emergency Points">
              <Placeholder title="Emergency Points" />
            </Layout>
          }
        />
      </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
