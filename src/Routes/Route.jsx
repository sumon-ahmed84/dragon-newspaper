import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Components/pages/Home";
import Catagories from "../Components/pages/Catagories";
import About from "../Components/pages/About";
import Login from "../Components/pages/Login";
import Register from "../Components/pages/Register";
import AuthLayout from "../layouts/AuthLayout";

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
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>,
            },
            {
                path:"/auth/register",
                element:<Register></Register>,
            },
        ]
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