import React, { useState } from 'react';
import './AddCategory.css';
import Header from '../../components/Header/Header.jsx'
import Navbar from '../../components/NavBar/Navbar.jsx'

const AddCategory = () => {
    //guardar los datos de nombre y descripcion y para inicializar vacio
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
    //prevenir recargar pagina al crear
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Categoria creada:\nNombre: ${nombre}\nDescripcion: ${descripcion}`);
  };

  return (
    <>
    <Header />
    <Navbar />
    <div className="overlay">
      <div className="modal">
        <h2>Nueva categoría</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Nombre de la categoría"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label>Descripción</label>
          <textarea
            placeholder="Descripción del producto..."
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />

          <button type="submit" className="crear-btn">🞤 Crear categoría</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddCategory;

