import NotFound from './Pages/NotFound.tsx'
import ProductDetail from './Pages/ProductDetail.tsx'
import Shop from './Pages/Shop.tsx'
import Index from './Pages/Index.tsx'
import Login from './Pages/Login.tsx'
import SignUp from './Pages/SignUp.tsx'
import AdminPanel from './Pages/AdminPanel.tsx'
import AdminDashboard from './Components/Templates/AdminPanel/AdminDashboard.tsx'
import AdminUsers from './Components/Templates/AdminPanel/AdminUsers.tsx'
import AdminProducts from './Components/Templates/AdminPanel/AdminProducts.tsx'
import AdminCollections from './Components/Templates/AdminPanel/AdminCollections.tsx'
import ContactUs from './Pages/ContactUs.tsx'
import Cart from './Pages/Cart.tsx'


const routes = [
    { path: "/", element: <Index /> },
    { path: "/shop", element: <Shop /> },
    { path: "/shop/:productID", element: <ProductDetail /> },
    { path: "/login", element: <Login /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/cart", element: <Cart /> },
    {
        path: "/p-admin/*",
        element: <AdminPanel />,
        children: [
            { path: '', element: <AdminDashboard /> },
            { path: 'users', element: <AdminUsers /> },
            { path: 'products', element: <AdminProducts /> },
            { path: 'collections', element: <AdminCollections /> },
        ]
    },
    { path: "*", element: <NotFound /> },
]


export default routes