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
import Register from './pages/Register/Register.jsx'
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery.jsx'
import UserDashboard from './pages/UserDashboard/UserDashboard.jsx'
import OrderDetail from './pages/OrderDetail/OrderDetail.jsx'

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
    path: "/orders/:orderId",
    element: <OrderDetail />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
