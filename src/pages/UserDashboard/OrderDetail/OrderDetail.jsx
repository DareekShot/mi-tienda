import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext.jsx'
import { ordersData } from '../../../data/orders.js'
import './orderDetail.css'
import Header from '../../../components/Header/Header.jsx'
import Footer from '../../../components/Footer/Footer.jsx'
import Navbar from '../../../components/NavBar/Navbar.jsx'

const OrderDetail = () =>{
  const { orderId } = useParams()
  const { user } = useAuth()

  const [order, setOrder] = useState(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (user) {
      const foundOrder = ordersData.find(
        (o) => o.id.toString() === orderId && o.userEmail === user.email
      )
      setOrder(foundOrder || null)
    }
  }, [orderId, user])

  const handleCancel = () => {
    if (!order || order.status === 'Cancelado') return

    order.status = 'Cancelado'
    setOrder({ ...order })
    setMessage('La orden ha sido cancelada.')
  }

  if (!order) {
    return (
      <div className="order-detail-container">
        <h2>Orden no encontrada</h2>
        <Link to="/dashboard" className="back-link">
          Volver al Dashboard
        </Link>
      </div>
    )
  }

  return (
    <>
    <Header />
    <Navbar />
    <div className="order-detail-container">
      <h1>Detalle de Orden #{order.id}</h1>
      <p>
        <strong>Fecha:</strong> {order.date}
      </p>
      <p>
        <strong>Estado:</strong>{' '}
        <span
          className={
            order.status === 'Cancelado' ? 'status-cancelled' : 'status-active'
          }
        >
          {order.status}
        </span>
      </p>
      <h2>Productos</h2>
      <table className="order-items-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, idx) => (
            <tr key={idx}>
              <td data-label="Producto">{item.product}</td>
              <td data-label="Cantidad">{item.quantity}</td>
              <td data-label="Precio unitario">${item.price.toFixed(2)}</td>
              <td data-label="Subtotal">${(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total-amount">
        <strong>Total:</strong> ${order.total.toFixed(2)}
      </p>

      {message && <p className="order-message">{message}</p>}

      <div className="order-actions">
        {order.status !== 'Cancelado' && (
          <button className="cancel-button" onClick={handleCancel}>
            Cancelar Orden
          </button>
        )}

        <Link to="/dashboard" className="back-link">
          Volver al Dashboard
        </Link>
      </div>
    </div>
    <Footer />
    </>
  )
}
export default OrderDetail
