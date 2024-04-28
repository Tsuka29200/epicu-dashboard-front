import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Profile from "./components/Auth/Profile";
import "./App.css";
import Prospection from "./pages/Prospection/Prospection";
import Clients from "./pages/Clients/Clients";
import Payments from "./pages/Payments/Payments";
import Files from "./pages/Files/Files";

function AppRouter({ user, setUser }) {
  return (
    <div className="wj-layout">
      <Banner />
      <main>
        <Routes>
          <Route path="/" element={<Profile user={user} setUser={setUser} />} />
          <Route path="/prospection" element={<Prospection />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/comptabilite" element={<Payments />} />
          <Route path="/documents" element={<Files />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppRouter;
