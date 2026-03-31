import { useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout, LayoutShell } from '../components/layout/Layout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { EventsPage } from '../pages/EventsPage';
import { ArtistsPage } from '../pages/ArtistsPage';
import { ArtistDetailPage } from '../pages/ArtistDetailPage';
import { MerchPage } from '../pages/MerchPage';
import { PartnersPage } from '../pages/PartnersPage';
import { TributePage } from '../pages/TributePage';
import { NotFoundPage } from '../pages/NotFoundPage';

function RootRouteError() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.title = 'Not Found | That Garage Vibe';
  }, []);
  return (
    <LayoutShell>
      <NotFoundPage />
    </LayoutShell>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RootRouteError />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'artists', element: <ArtistsPage /> },
      { path: 'artists/:id', element: <ArtistDetailPage /> },
      { path: 'merch', element: <MerchPage /> },
      { path: 'partners', element: <PartnersPage /> },
      { path: 'tribute', element: <TributePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
