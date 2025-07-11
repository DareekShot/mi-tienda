import React from "react";
import "./DetalleUser.css";

const resumen = [
  { id: '001', Fecha: '20/01/2025', Total: '152' },
  { id: '002', Fecha: '20/01/2025', Total: '122' },
  { id: '003', Fecha: '20/01/2025', Total: '200' },
  { id: '004', Fecha: '20/01/2025', Total: '300' },
  { id: '005', Fecha: '20/01/2025', Total: '580' },
  { id: '006', Fecha: '20/01/2025', Total: '985' },
  { id: '007', Fecha: '20/01/2025', Total: '215' }
];

function DetalleUser({ user }) {
  if (!user) return null;

  return (
    <div className="user-detail">
      <h4>Detalle del usuario</h4>
      <div className="user-info">
        <img
          src={user.img}
          alt={user.name}
          className="user-detail-img"
        />
        <div className="user-detail-data">
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Correo:</strong> {user.correo}</p>
          <p><strong>Fecha de registro:</strong> {user.fecha}</p>
          <p>
            <strong>Estado:</strong>{" "}
            <span className={user.status === "Activo" ? "active" : "inactive"}>
              {user.status}
            </span>
          </p>
        </div>
      </div>
      <h5>Compras realizadas</h5>
      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Fecha</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {resumen.map((order, i) => (
            <tr key={i}>
              <td>{order.id}</td>
              <td>{order.Fecha}</td>
              <td>S/.{order.Total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetalleUser;