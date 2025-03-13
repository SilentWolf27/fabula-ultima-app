import { Routes, Route } from "react-router";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Characters from "@/pages/Characters";
import ErrorPage from "@/pages/ErrorPage";
import Login from "@/auth/pages/Login";
import { AuthRoute } from "@/session/components/AuthRoute";
import { ProtectedRoute } from "@/session/components/ProtectedRoute";
import { MasterProtectedRoute } from "@/session/components/MasterProtectedRoute";
import { PlayerProtectedRoute } from "@/session/components/PlayerProtectedRoute";
import { ProfilePage } from "@/profile/pages/ProfilePage";
import CampaignBuilder from "@/campaign/pages/MasterCampaigns";
import CreateCampaign from "@/campaign/pages/CreateCampaign";

export default function App() {
  return (
    <Routes>
      {/* Auth routes - only accessible when NOT authenticated */}
      <Route element={<AuthRoute />}>
        <Route path="login" element={<Login />} />
      </Route>

      {/* Base protected routes - accessible by any authenticated user */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Route>

      {/* Master routes */}
      <Route element={<MasterProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="creador-historias" element={<CampaignBuilder />} />
          <Route path="creador-historias/crear" element={<CreateCampaign />} />
        </Route>
      </Route>

      {/* Player routes */}
      <Route element={<PlayerProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="personajes" element={<Characters />} />
          <Route path="historias" element={<Characters />} />
        </Route>
      </Route>
    </Routes>
  );
}
