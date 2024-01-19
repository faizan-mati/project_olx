import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Dashboard from '../Screen/Dashboard/Dashboard'
import ProductDetail from "../Screen/ProductDetail/ProductDetail";
import SignIn from "../Screen/SignIn/SignIn";
import SignUp from "../Screen/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/detail/:addId",
        element: <ProductDetail />
    },
]);
function Rounter() {
    return <RouterProvider router={router} />
}

export default Rounter