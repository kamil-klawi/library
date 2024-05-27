import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Error from './pages/Error';
import Books from './pages/Books';
import Translators from './pages/Translators';
import Authors from './pages/Authors';
import About from './pages/About.tsx';

const routerProvider = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/about_project',
        element: <About />,
    },
    {
        path: '/books',
        element: <Books />,
    },
    {
        path: '/authors',
        element: <Authors />,
    },
    {
        path: '/translators',
        element: <Translators />,
    },
    {
        path: '*',
        element: <Error />,
    },
]);

function App() {
    return <RouterProvider router={routerProvider} />;
}

export default App;
