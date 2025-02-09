import {ReactElement} from "react";
import {createBrowserRouter, RouterProvider} from "react-router";
import WeatherPage from "./pages/WeatherPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

export default function Router(): ReactElement {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <WeatherPage/>,
        },
        {
            path: '*',
            element: <NotFoundPage/>
        }
    ])

    return <RouterProvider router={router}/>
}