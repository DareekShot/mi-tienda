import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ordersData } from '../../data/orders.js'
import Pagination from '../../components/Pagination/Pagination.jsx'
import './userDashboard.css'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Navbar from '../../components/NavBar/Navbar.jsx'

const UserDashboard = () => {
  const [user, setUser] = useState(null)
  const [orders, setOrders] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (storedUser) {
      setUser(storedUser)
      const userOrders = ordersData.filter(
        (order) => order.userEmail === storedUser.email
      )
      setOrders(userOrders)
    }
    setIsLoading(false)
  }, [])

  if (isLoading) return null
  if (!user) return <Navigate to="/login" replace />

  const totalPages = Math.ceil(orders.length / 5)
  const paginatedOrders = orders.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  )

  return (
    <>
      <Header />
      <Navbar />
      <div className="dashboard-container">
        <h1>Bienvenido, {user.name}!</h1>

        <section className="user-info">
          <h2>Mis datos personales</h2>
          <div className="user-data-grid">
            <div><strong>Nombre:</strong> {user.name}</div>
            <div><strong>Apellido:</strong> {user.lastName}</div>
            <div><strong>DNI:</strong> {user.dni}</div>
            <div><strong>Correo:</strong> {user.email}</div>
            <div><strong>Teléfono:</strong> {user.phone}</div>
          </div>
        </section>

        <section className="orders-section">
          <h2>Mis órdenes recientes</h2>
          {orders.length === 0 ? (
            <p>No tienes órdenes registradas.</p>
          ) : (
            <>
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>ID Orden</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Total</th>
                    <th>Detalles</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td>
                        <span className={
                          order.status === 'Pendiente'
                            ? 'status-pending'
                            : order.status === 'Cancelado'
                            ? 'status-cancelled'
                            : order.status === 'Enviado'
                            ? 'status-shipped'
                            : ''
                        }>
                          {order.status}
                        </span>
                      </td>
                      <td>${order.total.toFixed(2)}</td>
                      <td>
                        <Link to={`/orders/${order.id}`} className="details-link">
                          Ver detalle
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </section>
      </div>
      <Footer />
    </>
  )
}

export default UserDashboard
