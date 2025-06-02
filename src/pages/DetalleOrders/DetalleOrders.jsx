import { useParams, useNavigate } from 'react-router-dom';
import './DetalleOrders.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/NavBar/Navbar';

const DetalleOrders = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const toggleEstadoUsuario = (id) => {
    const nuevosUsuarios = users.map((user) =>
      user.id === id
        ? { ...user, estado: user.estado === 'Activo' ? 'Inactivo' : 'Activo' }
        : user
    )
    setUsers(nuevosUsuarios)
  };

  const orderStatus = "Entregado";
  const totalAmount = "S/400.00";
  const products = [
    { id: "#02223", name: "Manzanas Rojas", category: "Frutas y verduras", quantity: 10, total: "S/19.00" },
    { id: "#6425", name: "Leche gloria", category: "Lácteos y huevos", quantity: 4, total: "S/19.00" },
    { id: "#23444", name: "Papaya", category: "Frutas y verduras", quantity: 4, total: "S/18.00" },
    { id: "#4344", name: "Sandía", category: "Frutas y verduras", quantity: 12, total: "S/19.00" },
    { id: "#64544", name: "Pollo entero fresco con menudencia", category: "Carnes, aves y pescados", quantity: 1, total: "S/19.00" },
    { id: "#8123", name: "Uvas", category: "Frutas y verduras", quantity: 1, total: "S/19.00" },
  ];

  return (
    <div>
    <Header />
    <Navbar />
    <div className="order-details">
      <h2>Detalles de Orden</h2>
      <div className="order-summary">
        <h3>Orden #{id}</h3>
        <p>Estado: {orderStatus}</p>
        <p>Monto total: {totalAmount}</p>
      </div>
      <h4>Productos ordenados</h4>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>{product.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>«</button>
        <span>1</span>
        <button>2</button>
        <button>3</button>
        <span>...</span>
        <button>10</button>
        <button>»</button>
      </div>
      <button onClick={handleBack} style={{ marginTop: '20px' }}>Volver al listado</button>
    </div>
    </div>
  );
};

export default DetalleOrders;
