import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TablaUser.css";
import api from "../../api/usersApi.js"; // Importa tu API

function TablaUser({ onSelectUser }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.findAll().then((data) => {
      if (Array.isArray(data)) setUsers(data);
    });
  }, []);

  // Cambia el estado del usuario en backend y frontend
  const handleDeactivateUser = async (user) => {
    const nuevoEstado = user.estado === "activo" ? "inactivo" : "activo";
    try {
      await api.update({ ...user, estado: nuevoEstado });
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === user.id ? { ...u, estado: nuevoEstado } : u
        )
      );
    } catch (error) {
      alert("Error al actualizar el estado del usuario");
    }
  };

  return (
    <div className="user-table">
      <div className="user-table-header">
        <h4>Usuarios registrados</h4>
        <button onClick={() => navigate('/users')}>Ver todos los Usuarios</button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user.id || i}>
              <td>
                <img
                  src={user.img || "https://randomuser.me/api/portraits/lego/1.jpg"}
                  alt={user.name}
                />
              </td>
              <td>{user.name} {user.lastname}</td>
              <td className={user.estado === 'activo' ? 'active' : 'inactive'}>
                {user.estado === 'activo' ? 'Activo' : 'Inactivo'}
              </td>
              <td>
                <button
                  onClick={() => handleDeactivateUser(user)}
                  style={{ marginRight: "8px" }}
                >
                  {user.estado === 'activo' ? 'Desactivar' : 'Activar'}
                </button>
                <button onClick={() => onSelectUser && onSelectUser(user)}>
                  Ver detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaUser;