import React, { useState } from 'react';
import './CategoryList.css';
import { useNavigate } from 'react-router-dom'; // para redirigir a la ruta

const CategoryList = () => {
  const navigate = useNavigate();

  const categorias = [
    { id: '#001', nombre: 'Frutas y verduras', descripcion: 'Productos frescos y naturales...' },
    { id: '#002', nombre: 'Carnes, aves y pescados', descripcion: 'Cortes seleccionados...' },
    { id: '#003', nombre: 'Abarrotes', descripcion: 'Todo lo esencial para tu despensa...' },
    { id: '#004', nombre: 'Panaderia', descripcion: 'Pan fresco del dia...' },
    { id: '#005', nombre: 'Congelados', descripcion: 'Gran variedad de alimentos congelados...' },
    { id: '#006', nombre: 'Juguetes', descripcion: 'Juguetes educativos y divertidos...' },
    { id: '#007', nombre: 'Ropa', descripcion: 'Moda infantil, ropa casual y más...' }
  ];

// busca id/nombre/descripción
  const [busqueda, setBusqueda] = useState('');

  const categoriasFiltradas = categorias.filter(cat =>
    cat.id.toLowerCase().includes(busqueda.toLowerCase()) ||
    cat.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    cat.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="categorias-container">
      <h2>Listado de categorías</h2>
      <div className="top-bar">
        <input
          type="text"
          placeholder="Buscar por ID, nombre o descripcion..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button className="add-btn" onClick={() => navigate('/admin/categories/add')}>
         <img src="https://img.icons8.com/ios-filled/50/FFFFFF/add--v1.png" alt="mas" className='icono'/>   Agregar categoría
        </button>
      </div>
      <table className="category-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categoriasFiltradas.map((cat, index) => (
            <tr key={index}>
              <td className="id-color">{cat.id}</td>
              <td><strong>{cat.nombre}</strong></td>
              <td>{cat.descripcion}</td>
              <td className="acciones">
                <button className="edit-btn">
                  <img src="https://icones.pro/wp-content/uploads/2022/07/icone-crayon-orange.png" alt="editar" className='icono' />
                </button>
                <button className="delete-btn">
                  <img src="https://img.icons8.com/material/24/FD7E14/filled-trash.png" alt="eliminar" className='icono' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagina">
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

export default CategoryList;

