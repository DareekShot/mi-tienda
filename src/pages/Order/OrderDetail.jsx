import React from 'react';
import './OrderDetail.css';

const OrderDetail = () => {
  const orden = {
    id: '#1234',
    estado: 'Entregado',
    total: 400,
    productos: [
      { id: '#09223', nombre: 'Manzanas Rojas', categoria: 'Frutas y verduras', cantidad: 10, total: 75.00, imagen: 'https://andreuprados.com/wp-content/uploads/2017/01/apple_0.jpg.webp' },
      { id: '#6425', nombre: 'Leche gloria', categoria: 'Lacteos y huevos', cantidad: 4, total: 16.00, imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/29033710-450-450/20402655.jpg?v=638755968282700000' },
      { id: '#2344', nombre: 'Papaya', categoria: 'Frutas y verduras', cantidad: 4, total: 18.00, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAXtZXW0NwXfeThZW9BbWaT36At6cOjfv4Q&s' },
      { id: '#4344', nombre: 'Sandía', categoria: 'Frutas y verduras', cantidad: 12, total: 16.00, imagen: 'https://fruiver.com/wp-content/uploads/2021/07/Sandia-rayada-3.jpg' },
      { id: '#4544', nombre: 'Pollo entero fresco', categoria: 'Carnes, aves y pescados', cantidad: 1, total: 85.00, imagen: 'https://avinews.com/wp-content/uploads/2023/07/EEUU-precio-pollo-de-engorde-840x720.png' },
      { id: '#8123', nombre: 'Uvas', categoria: 'Frutas y verduras', cantidad: 1, total: 70.00, imagen: 'https://www.frutosdelcampoperu.com/wp-content/uploads/2017/11/UVA-SIN-PEPA.png' }
    ]
  };

  return (
    <div className="orden-container">
      <h2>Detalles de Órden</h2>
      <div className="orden-header">
        <h3>Orden <span className="orden-id">{orden.id}</span></h3>
        <div>
          <p><strong>Estado:</strong> <span className="estado">{orden.estado}</span></p>
          <p><strong>Monto total:</strong> S/ {orden.total.toFixed(2)}</p>
        </div>
      </div>

      <h4>Productos ordenados</h4>
      <table className="orden-table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Id</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orden.productos.map((prod, i) => (
            <tr key={i}>
              <td><img src={prod.imagen} alt={prod.nombre} className="producto-img-tabla"/></td>
              <td className="id-color">{prod.id}</td>
              <td>{prod.nombre}</td>
              <td><strong>{prod.categoria}</strong></td>
              <td>{prod.cantidad}</td>
              <td>S/ {prod.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="paginacion">
        <button>{'<'}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <span>…</span>
        <button>10</button>
        <button>{'>'}</button>
      </div>
    </div>
  );
};

export default OrderDetail;
