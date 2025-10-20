import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Components/pages/Home";
import Catagories from "../Components/pages/Catagories";
import About from "../Components/pages/About";

const router =createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/about",
                element:<About></About>,
            },
            {
                path:"/catagories/:id",
                element:<Catagories></Catagories>,
                loader:()=>fetch("/news.json")
            },
        ]
    },
    {
        path: "/auth",
        element: <h1>Authentaction Layout</h1>
    },
    {
        path: "/news",
        element: <h1>News Layout</h1>
    },
    {
        path: "/*",
        element: <h1>Error 404</h1>
    },
])

export default router;