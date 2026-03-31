import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#0a0a0a]">
      <Header />
      <main className="w-full flex-1 pt-24 md:pt-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
