import { useEffect, type ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { getDocumentTitle } from "../../lib/documentTitle";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#0a0a0a]">
      <a
        href="#main-content"
        className="absolute left-4 top-0 z-[100] -translate-y-full rounded-b bg-white px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-black outline-none transition-transform focus:translate-y-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
      >
        Skip to main content
      </a>
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="w-full flex-1 pt-24 md:pt-32"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    document.title = getDocumentTitle(pathname);
  }, [pathname]);

  return (
    <LayoutShell>
      <Outlet />
    </LayoutShell>
  );
}
