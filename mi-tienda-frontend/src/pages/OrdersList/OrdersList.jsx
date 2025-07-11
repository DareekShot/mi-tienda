import { useNavigate } from 'react-router-dom';
import './OrdersList.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/NavBar/Navbar';

const OrdersList = () => {
  const navigate = useNavigate();

  const orders = [
    { id: '1234', user: 'Juan Perez', date: '20/01/2025', total: '$199.00', status: 'Entregado' },
    { id: '5678', user: 'María Gonzales', date: '21/01/2025', total: '$150.00', status: 'Por entregar' },
    { id: '9101', user: 'Marco Aurelio', date: '22/01/2025', total: '$120.00', status: 'Entregado' },
    { id: '1121', user: 'Ana Díaz', date: '23/01/2025', total: '$180.00', status: 'Entregado' },
  ];

  const handleViewDetails = (id) => {
    navigate(`/orders/${id}/detalle`);
  };

  return (
    <div>
      <Header />
      <Navbar />
    <div className="order-list">
      <h1>Listado de órdenes</h1>
      <input type="text" placeholder="Buscar una orden..." className="search-input" />
      <table>
        <thead>
          <tr>
            <th>#ORDEN</th>
            <th>Usuario</th>
            <th>Fecha de orden</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.user}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td className={order.status === 'Entregado' ? 'delivered' : 'pending'}>
                {order.status}
              </td>
              <td>
                <button className="detail-button" onClick={() => handleViewDetails(order.id)}>
                  Ver detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>10</button>
      </div>
    </div>
    </div>
  );
};

export default OrdersList



