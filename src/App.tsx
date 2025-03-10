import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import ErrorPage from "./pages/ErrorPage";
import Login from "./auth/pages/Login";
import { AuthRoute } from "./session/components/AuthRoute";

export default function App() {
  return (
    <Routes>
      {/* Auth routes - only accessible when NOT authenticated */}
      <Route element={<AuthRoute />}>
        <Route path="login" element={<Login />} />
      </Route>

      {/* App routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
