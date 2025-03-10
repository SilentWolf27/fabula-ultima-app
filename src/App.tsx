import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import ErrorPage from "./pages/ErrorPage";
import Login from "./auth/pages/Login";

export default function App() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="login" element={<Login />} />

      {/* App routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
