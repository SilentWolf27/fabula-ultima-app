import { Outlet } from "react-router";
import { Header } from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </>
  );
}
