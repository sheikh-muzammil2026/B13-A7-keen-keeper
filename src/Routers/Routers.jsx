import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Components/Home/Home";
import FriendDetails from "../Pages/FriendDetails";
import TimeLine from "../Pages/TimeLine";
import Stats from "../Pages/Stats";
import NotFound from "../Pages/NotFound";


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <RootLayout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/friend/:id',
                    element: <FriendDetails/>
                },
                {
                    path: '/timeline',
                    element: <TimeLine/>
                },
                {
                    path: '/stats',
                    element: <Stats/>
                }
            ],
            errorElement: <NotFound/>
        }
    ]
)