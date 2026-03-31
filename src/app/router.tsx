import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { EventsPage } from '../pages/EventsPage';
import { ArtistsPage } from '../pages/ArtistsPage';
import { ArtistDetailPage } from '../pages/ArtistDetailPage';
import { MerchPage } from '../pages/MerchPage';
import { PartnersPage } from '../pages/PartnersPage';
import { TributePage } from '../pages/TributePage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
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
