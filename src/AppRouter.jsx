import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Profile from "./components/Auth/Profile";
import PlantAdd from "./pages/PlantAdd/PlantAdd";
import PlantDetail from "./pages/PlantDetail/PlantDetail";
import "./App.css";
import Prospection from "./pages/Prospection/Prospection";
import Clients from "./pages/Clients/Clients";

function AppRouter({ user, setUser }) {
  return (
    <div className="wj-layout">
      <Banner />
      <main>
        <Routes>
          <Route path="/" element={<Profile user={user} setUser={setUser} />} />
          <Route path="/categories" element={<PlantAdd />} />
          <Route path="/prospection" element={<Prospection />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/comptabilite" element={<PlantDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppRouter;
