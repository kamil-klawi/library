import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Error from './pages/Error';

const routerProvider = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
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
