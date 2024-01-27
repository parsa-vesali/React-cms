import Home from "./Pages/home/Home"
import UserList from "./Pages/users/UserList";
import NewUser from "./Pages/newUser/NewUser";
import Products from "./Pages/products/Products";
import Product from "./Pages/product/Product";
import Analysis from "./Pages/analysis/Analysis";
let routes = [
    { path: '/', element: <Home /> },
    { path: '/analysis', element: <Analysis /> },
    { path: '/users', element: <UserList /> },
    { path: '/newuser', element: <NewUser /> },
    { path: '/products', element: <Products /> },
    { path: '/product/:ProductID', element: <Product /> },
]
export default routes;