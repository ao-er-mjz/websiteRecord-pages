import './index.scss';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from '@/pages/home';
import Page1 from '@/pages/page1';
import Page2 from '@/pages/page2';
import Page3 from '@/pages/page3';
import Page4 from '@/pages/page4';

function Router() {
    const router = createHashRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/page1',
            element: <Page1 />,
        },
        {
            path: '/page2',
            element: <Page2 />,
        },
        {
            path: '/page3',
            element: <Page3 />,
        },
        {
            path: '/page4',
            element: <Page4 />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default Router;
