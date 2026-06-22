import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appRoutes } from './config/AppRoutes';
import Layout from './components/Layout/Layout';

function mapToRouterConfig(routes) {
    return routes.map(({ path, element, children }) => ({
        path,
        element,
        ...(children?.length ? { children: mapToRouterConfig(children) } : {}),
    }));
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: mapToRouterConfig(appRoutes),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;