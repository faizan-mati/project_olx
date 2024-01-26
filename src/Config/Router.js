import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Dashboard from '../Screen/Dashboard/Dashboard'
import ProductDetail from "../Screen/ProductDetail/ProductDetail";
import AddPost from "../Screen/AddPost/AddPost";
import EditProfile from "../Screen/EditProfile/EditProfile";
import MyAdds from "../Screen/MyAdd/MyAdds";
import Purchase from "../Screen/Purchase/Purchase";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
   
    {
        path: "/detail/:addId",
        element: <ProductDetail />
    },
    {
        path: "/AddPost",
        element: <AddPost />
    },
    {
        path: "/editprofile",
        element: <EditProfile />
    },
    {
        path: "/myadd",
        element: <MyAdds />
    },
    {
        path: "/purchase",
        element: <Purchase />
    },
]);
function Rounter() {
    return <RouterProvider router={router} />
}

export default Rounter