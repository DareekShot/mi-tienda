import React from "react";
import "./TablaProdu.css";
import Header from "../Header/Header";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";



const orders = [
  { img:'' ,id: '#8123', Nombre: 'Uvas', Presentación: '0,8kg', Descripción: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', Categoria: 'Frutas y verduras' , Stock: 10},
  { img:'' ,id: '#4343', Nombre: 'Peras', Presentación: '0,1kg', Descripción: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', Categoria: 'Frutas y verduras' , Stock: 23,},
  { img:'' ,id: '#0223', Nombre: 'Manzanas rojas', Presentación: '0,3kg', Descripción: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', Categoria: 'Frutas y verduras' , Stock: 21,},
  { img:'' ,id: '#4344', Nombre: 'Sandia', Presentación: '1kg', Descripción: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', Categoria: 'Frutas y verduras' , Stock: 10},
  { img:'' , id: '#6425', Nombre: 'Leche Gloria', Presentación: '6 unidades', Descripción: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', Categoria: 'Lacteos y huevos' , Stock: 30},
  { img:'' ,id: '#5454', Nombre: 'Pollo entero fresco con menudencia', Presentación: '2,2kg', Descripción: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', Categoria: 'Carne, aves y pescados' , Stock: 3},
  { img:'' ,id: '#2344', Nombre: 'Papaya', Presentación: '0,8kg', Descripción: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', Categoria: 'Frutas y verduras' , Stock: 16}
];
const handleProductosClick = () => {
        window.location.href = "/agregar-producto";
    };
const handleProductosClick1 = () => {
        window.location.href = "/editar-producto";
    };

function TablaProdu() {
  return (
    <>
    <Header />
    <Navbar />
    <div className="order-list">
      <h2>Listado de productos</h2>
      <div className="BuscadorProdu" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <input type="text" placeholder="Buscar por nombre o ID" style={{ flex: "1" }} />
        <button>Buscar</button>
        <button>Categorías</button>
        <button onClick={handleProductosClick}>Agregar producto</button>
      </div>
      <div className="TablaProdu">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>#ID</th>
              <th>Nombre</th>
              <th>Presentación</th>
              <th>Descripción</th>
              <th>Categoria</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i}>
                <td className="highlight">{order.id}</td>
                <td>{order.img}</td>
                <td>{order.Nombre}</td>
                <td>{order.Presentación}</td>
                <td>{order.Descripción}</td>
                <td>{order.Categoria}</td>
                <td>{order.Stock}</td>
                <td className="delivered"><button className="edit-btn" title="Editar" onClick={handleProductosClick1}>✏️</button>
                  <button className="delete-btn" title="Eliminar">🗑️</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default TablaProdu;