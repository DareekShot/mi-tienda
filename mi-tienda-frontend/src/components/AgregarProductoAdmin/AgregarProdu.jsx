import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../NavBar/NavBar';
import './AgregarProdu.css';
import React from 'react';

// import Footer from '../../Footer/Footer'; // Uncomment if you want to include the footer
const AgregarProdu = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <div>
      <h2>Agregar Producto</h2>
      <form className="agregar-producto-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre del Producto:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="presentacion">Presentación:</label>
          <input type="text" id="presentacion" name="presentacion" required />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoría:</label>
          <select id="categoria" name="categoria" required>
            <option value="">Seleccione una categoría</option>
            <option value="electronica">Electrónica</option>
            <option value="ropa">Ropa</option>
            <option value="hogar">Hogar</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" name="descripcion" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="imagen">Imagen:</label>
          <input type="file" id="imagen" name="imagen" accept="image/*" />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input type="number" id="stock" name="stock" min="0" required />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}
export default AgregarProdu;