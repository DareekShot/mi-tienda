import React from "react";
import { useNavigate } from "react-router-dom";
import "./TablaUser.css";

const users = [
  { 
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    name: 'Juan Perez', 
    status: 'Activo', 
    correo: 'asdñljañsd@gmail.com', 
    fecha: '20/01/2025'
  },
  { 
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    name: 'María Gonzales', 
    status: 'Activo', 
    correo: 'sdñljañsd@gmail.com', 
    fecha: '20/01/2025' 
  },
  { 
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    name: 'Marco Aurelio', 
    status: 'Activo', 
    correo: 'sdñljañsd@gmail.com', 
    fecha: '20/01/2025' 
  },
  { 
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    name: 'Ana Dios', 
    status: 'Activo', 
    correo: 'sdñljañsd@gmail.com', 
    fecha: '20/01/2025' 
  },
  { 
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    name: 'Carlos Lopez', 
    status: 'Activo', 
    correo: 'sdñljañsd@gmail.com', 
    fecha: '20/01/2025'
  },
  { 
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    name: 'Laura Mendez', 
    status: 'Activo', 
    correo: 'sdñljañsd@gmail.com', 
    fecha: '20/01/2025'
  },
  { 
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    name: 'Alejandro Ruiz', 
    status: 'Inactivo', 
    correo: 'sdñljañsd@gmail.com', 
    fecha: '20/01/2025'
  },
];

function TablaUser({ onSelectUser, onDeactivateUser }) {
  const navigate = useNavigate();

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
            <tr key={i}>
              <td><img 
              src ={user.img}
              alt={user.name}
              /></td>
              <td>{user.name}</td>
              <td className={user.status === 'Activo' ? 'active' : 'inactive'}>{user.status}</td>
              <td><button onClick={() => onDeactivateUser && onDeactivateUser(user)} style={{ marginRight: "8px" }}>
                  Desactivar
                </button>
                <button onClick={() => onSelectUser && onSelectUser(user)}>
                  Ver detalle
                </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaUser;
