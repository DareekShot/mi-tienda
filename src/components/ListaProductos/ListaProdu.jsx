import React from 'react';
import './ListaProdu.css';

const orders = [
  { id: '#001', user: 'Alejandro Ruiz', date: '20/01/2025', total: 'S/199.00', status: 'Entregado' },
  { id: '#002', user: 'Alejandro Ruiz', date: '20/01/2025', total: 'S/199.00', status: 'Entregado' },
  { id: '#003', user: 'Alejandro Ruiz', date: '20/01/2025', total: 'S/199.00', status: 'Entregado' },
  { id: '#004', user: 'Alejandro Ruiz', date: '20/01/2025', total: 'S/199.00', status: 'Entregado' }
];

function ListaProdu() {
  return (
    <div className="order-list">
      <div className='order-list-header'>
      <h4>Listado de ordenes</h4>
      <button onClick={() => onSelectUser && onSelectUser(user)} className='view-products'>Ver Productos</button>
      <button onClick={() => onSelectUser && onSelectUser(user)} className='view-all-list'>Ver todas las ordenes</button>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Usuario</th>
            <th>Fecha de órden</th>
            <th>Total</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i}>
              <td className="highlight">{order.id}</td>
              <td>{order.user}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td className="delivered">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProdu;