import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AuthProvider from './contexts/AuthContext.jsx'
import Checkout from './pages/Checkout/Checkout.jsx'
import PaymentMethod from './pages/Checkout/PaymentMethod/PaymentMethod.jsx'
import QR from './pages/Checkout/QR/QR.jsx'
import Card from './pages/Checkout/Card/Card.jsx'
import Pago from './pages/Checkout/Pago/Pago.jsx'
import Carrito from './pages/Carrito/Carrito.jsx'
import ResultadoBusqueda from './components/ResultadoBusqueda/ResultadoBusqueda.jsx'
import DetalleProducto from './components/DetalleProducto/DetalleProducto.jsx'
import Login from './pages/Login/Login.jsx'
import AdminLogin from './pages/Login/AdminLogin/AdminLogin.jsx'
import Register from './pages/Register/Register.jsx'
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery.jsx'
import UserDashboard from './pages/UserDashboard/UserDashboard.jsx'
import AddCategory from './pages/Admin/AddCategory.jsx';
import CategoryList from './pages/Admin/CategoryList.jsx';
import OrderDetailUSU from './pages/Order/OrderDetailUSU.jsx';
import EditProfileUSU from './pages/User/EditProfileUSU.jsx';
import ChangePasswordUSU from './pages/User/ChangePasswordUSU.jsx';
import DashboardAdmin from './pages/Admin/AdminDashboard/Dashboard.jsx'
import ListaProdu from './components/ListaProductos/ListaProdu.jsx'
import TablaProdu from './components/ListaProductosAdmin/TablaProdu.jsx'
import AgregarProdu from './components/AgregarProductoAdmin/AgregarProdu.jsx'
import Editar from './components/EditarProductoAdmin/Editar.jsx'
import DetalleOrders from './pages/DetalleOrders/DetalleOrders.jsx'
import UsersList from './pages/UsersList/UsersList.jsx'
import OrdersList from './pages/OrdersList/OrdersList.jsx'
import DetalleUser from './pages/DetalleUser/DetalleUser.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/resultadoBusqueda",
    element: <ResultadoBusqueda />
  },
  {
    path: "/detalleProducto",
    element: <DetalleProducto />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "/checkout/payment",
    element: <PaymentMethod />
  },
  {
    path: "/checkout/qr",
    element: <QR />
  },
  {
    path: "/checkout/card",
    element: <Card />
  },
  {
    path: "/checkout/pago",
    element: <Pago />
  },
  {
    path: "/carrito",
    element: <Carrito />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/admin-login",
    element: <AdminLogin />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/password-recovery",
    element: <PasswordRecovery />
  },
  {
    path: "/dashboard",
    element: <UserDashboard />
  },
  {
  path: "/admin/categories",
  element: <CategoryList />
  },
  {
  path: "/admin/categories/add",
  element: <AddCategory />
  },
  {
  path: "/ordenes-usuario/:id",
  element: <OrderDetailUSU />
  },
  {
  path: "/usuario/editar-perfil",
  element: <EditProfileUSU />
  },
  {
  path: "/usuario/cambiar-clave",
  element: <ChangePasswordUSU />
  },
  {
    path:"/admin/Dashboard",
    element: <DashboardAdmin />
  },
  {
    path: "/admin/lista-productos",
    element: <TablaProdu />  
  },
  {
    path: "/admin/lista-productos/agregar-producto",
    element: <AgregarProdu />
  },
  {
    path: "/admin/lista-productos/editar-producto",
    element: <Editar />
  },
  {
    path: "/orders/:orderId/detalle",
    element: <DetalleOrders />
  },
  {
    path: "/users",
    element: <UsersList />
  },
  {
    path: "/orders",
    element: <OrdersList />
  },
  {
    path: "/users/:id",
    element: <DetalleUser />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
