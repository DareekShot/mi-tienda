import React from 'react';
import './Editar.css';
import Header from '../Header/Header';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Editar = () => {
    return (
        <>
        <Header/>
        <Navbar/>
        <div className="editar-producto">
            <h2>Editar Producto</h2>
            <form className="editar-form">
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
                        <option value="frutas">Frutas y verduras</option>
                        <option value="lacteos">Lácteos y huevos</option>
                        <option value="carnes">Carne, aves y pescados</option>
                        <option value="panaderia">Panadería</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea id="descripcion" name="descripcion" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="stock">Stock:</label>
                    <input type="number" id="stock" name="stock" min="0" required />
                </div>
                <button type="submit" className="btn-editar">Guardar Cambios</button>
            </form>
        </div>
        <Footer/>
        </>
    )
}

export default Editar;