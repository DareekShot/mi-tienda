import './DetalleUser.css'
import { useParams, Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Navbar from '../../components/NavBar/Navbar'
import { usersData } from '../../data/users'

const DetalleUser = () => {
  const { id } = useParams()
  const user = usersData.find((u) => u.id === Number(id))

  if (!user) {
    return (
      <div className="user-details">
        <h2>Usuario no encontrado</h2>
        <Link to="/users">Volver al listado</Link>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Navbar />
    <div className="user-details">
      <h2>Detalles de usuario</h2>
      <div className="user-info">
        <img src={user.img} alt={`${user.name} ${user.lastName}`} className="user-image" />
        <div className="info">
          <h3>{`${user.name} ${user.lastName}`}</h3>
          <p>Correo: {user.email}</p>
          <p>Fecha de registro: {new Date().toLocaleDateString()}</p>
          <p>Estado: Activo</p>
        </div>
      </div>
      <h3>Últimas órdenes</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {user.orders && user.orders.length > 0 ? (
            user.orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.total}</td>
                <td>
                  <button className="detail-button">Ver detalle</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay órdenes para este usuario</td>
            </tr>
          )}
        </tbody>
      </table>
      <Link to="/users">
        <button className="volver-button">Volver</button>
      </Link>
    </div>
    </div>
  )
}

export default DetalleUser

