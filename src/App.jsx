import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appRoutes } from './config/AppRoutes';
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/Loading/LoadingSpinner';

function mapToRouterConfig(routes) {
    return routes.map(({ children, ...rest }) => ({
        ...rest,
        ...(children?.length ? { children: mapToRouterConfig(children) } : {}),
    }));
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        HydrateFallback: LoadingSpinner, 
        children: mapToRouterConfig(appRoutes),
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;