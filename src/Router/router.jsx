// Creating Routes for front end

import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../DefaultLayout/DefaultLayout.jsx";
import DashBoardLayout from "../Pages/DashBoardLayout.jsx";
import GuestLayout from "../GuestLayout/GuestLayout.jsx";
import DashBoardPage from "../Pages/DashBoard/page.jsx";
import LandingPage from "../GuestLayout/LandingPage.jsx";
import Login from "../GuestLayout/Login.jsx";
import SignUp from "../GuestLayout/SignUp.jsx";
const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <GuestLayout />,
    //     children:
    //     [
    //       {
    //         path:"/landing",
    //         element:<LandingPage/>
    //       },
    //       {
    //         path:"/login",
    //         element:<Login/>
    //       },
    //       {
    //         path:"/signup",
    //         element:<SignUp/>
    //       }
    //     ]
    // },
    // {
    //     path: "/",
    //     element: <DefaultLayout />,
    //     children: [
            {
                path: "/dashboard",
                element: <DashBoardLayout />,
                children: [
                    {
                        index: true,
                        element: <DashBoardPage />,
                    },
                ],
            },
        // ],
    // },
]);

export default router;
