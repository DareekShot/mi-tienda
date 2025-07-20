import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListaProdu.css';
import ordenApi from '../../api/orden.js';

function ListaProdu() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await ordenApi.getAllOrders();
      if (Array.isArray(data)) setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="order-list">
      <div className='order-list-header'>
        <h4>Listado de ordenes</h4>
       
        <button 
          onClick={() => navigate('/admin/lista-productos')} 
          className='view-products'
        >
          Ver productos
        </button>
        <button onClick={() => navigate('/orders')} className='view-all-list'>Ver todas las ordenes</button>
       
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
            <tr key={order.id || i}>
              <td className="highlight">{order.id}</td>
              <td>{order.usuario}</td>
              <td>{new Date(order.fechadeorden).toLocaleDateString()}</td>
              <td>{order.total}</td>
              <td className="delivered">{order.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProdu;