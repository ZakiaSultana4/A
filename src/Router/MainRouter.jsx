import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";

import SignIn from "../Page/SignIn";
import SignUp from "../Page/SignUp";
import Products from "../Page/Products/Products";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/p",
                element: <Products/>
            },
          
           
        ]
    }, 
    {
        path: "/login",
        element: <SignIn/>
    },
    {
        path: "/register",
        element:<SignUp/> 
    },

])

export default MainRouter;