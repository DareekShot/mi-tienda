import './UsersList.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Navbar from '../../components/NavBar/Navbar'
import { usersData } from '../../data/users'

const UsersList = () => {
  const [search, setSearch] = useState('')
  const [users] = useState(usersData.map(user => ({
    ...user,
    nombre: `${user.name} ${user.lastName}`,
    fecha: new Date().toLocaleDateString(),
    estado: 'Activo'
  })))

  return (
    <div>
      <Header />
      <Navbar />
    <section className="tabla-usuarios">
      <h1>Listado de usuarios</h1>

      <div className="filtro-busqueda">
        <input
          type="text"
          placeholder="Buscar un usuario..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nombre completo</th>
            <th>Fecha de registro</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td><img src={user.img} alt={user.nombre} style={{ width: '40px', height: '40px', borderRadius: '50%' }} /></td>
                <td>{user.nombre}</td>
                <td>{user.fecha}</td>
                <td className={user.estado === 'Activo' ? 'activo' : 'inactivo'}>
                  {user.estado}
                </td>
                <td>
                  <button className="desactivar">
                    {user.estado === 'Activo' ? 'Desactivar' : 'Activar'}
                  </button>
                  <Link to={`/users/${user.id}`}>
                    <button className="ver-detalle">Ver detalle</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No se encontraron usuarios.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
    </div>
  )
}

export default UsersList

