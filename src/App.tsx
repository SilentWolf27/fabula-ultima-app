import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import ErrorPage from "./pages/ErrorPage";
import Login from "./auth/pages/Login";
import { AuthRoute } from "./session/components/AuthRoute";
import { ProtectedRoute } from "./session/components/ProtectedRoute";
import { ProfilePage } from "./profile/pages/ProfilePage";

export default function App() {
  return (
    <Routes>
      {/* Auth routes - only accessible when NOT authenticated */}
      <Route element={<AuthRoute />}>
        <Route path="login" element={<Login />} />
      </Route>

      {/* Protected routes - only accessible when authenticated */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="personajes" element={<Characters />} />
          <Route path="historias" element={<Characters />} />
          <Route path="perfil" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
