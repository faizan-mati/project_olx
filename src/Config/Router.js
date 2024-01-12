import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Dashboard from '../Screen/Dashboard/Dashboard'
import ProductDetail from "../Screen/ProductDetail/ProductDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
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