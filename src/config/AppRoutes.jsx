/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/Loading/LoadingSpinner';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));

const withSuspense = (Component) => (
    <Suspense fallback={<LoadingSpinner/>}>
        <Component />
    </Suspense>
);

export const appRoutes = [
    {
        id: 'home',
        name: 'Početna',
        path: '/',
        element: withSuspense(HomePage),
        showInMenu: true,
    },
    /* Primer ostatka liste:
    {
        id: 'skola',
        name: 'Škola',
        path: '/skola',
        showInMenu: true,
        // Roditeljska ruta mora imati <Outlet /> u svom elementu
        // da bi children bili prikazani
        children: [
            {
                id: 'about',
                name: 'O nama',
                path: 'o-nama',        // → /skola/o-nama
                element: withSuspense(AboutPage),
                showInMenu: true,
            },
            {
                id: 'staff',
                name: 'Zaposleni',
                path: 'zaposleni',     // → /skola/zaposleni
                element: withSuspense(StaffPage),
                showInMenu: true,
            },
        ],
    },
    {
        id: 'contact',
        name: 'Kontakt',
        path: '/kontakt',
        element: withSuspense(ContactPage),
        showInMenu: true,
    },
    {
        id: 'not-found',
        name: '404',
        path: '*',
        element: withSuspense(NotFoundPage),
        showInMenu: false,
    },*/
];