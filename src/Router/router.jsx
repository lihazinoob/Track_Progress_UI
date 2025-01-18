// Creating Routes for front end

import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/layout.jsx"
import DashBoardPage from "../Pages/DashBoard/page.jsx";
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>,
      children:
      [
        {
          index:true,
          element:<DashBoardPage/>
        }
      ]
    }
  ]
);

export default router;

