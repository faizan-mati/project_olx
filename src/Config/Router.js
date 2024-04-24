import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Dashboard from '../Screen/Dashboard/Dashboard'
import ProductDetail from "../Screen/ProductDetail/ProductDetail";
import AddPost from "../Screen/AddPost/AddPost";
import EditProfile from "../Screen/EditProfile/EditProfile";
import MyAdds from "../Screen/MyAdd/MyAdds";
import Purchase from "../Screen/Purchase/Purchase";
import Cart from "../Screen/AddCart/Cart";
import EditPost from "../Screen/EditPost/EditPost";

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
        path: "/myadd/:id",
        element: <MyAdds />
    },
    {
        path: "/purchase",
        element: <Purchase />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/postedit",
        element: <EditPost />
    },
]);

function Rounter() {
    return <RouterProvider router={router} />
}

export default Rounter