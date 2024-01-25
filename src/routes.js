import Home from "./Pages/home/Home"
import UserList from "./Pages/users/UserList";
import NewUser from "./Pages/newUser/NewUser";
import Products from "./Pages/products/Products";
let routes = [
    { path: '/', element: <Home /> },
    { path: '/users', element: <UserList /> },
    { path: '/newuser', element: <NewUser /> },
    { path: '/products', element: <Products /> },
]
export default routes;