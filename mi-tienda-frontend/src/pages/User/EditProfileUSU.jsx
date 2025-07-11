import React, { useState } from 'react';
import './EditProfile.css';
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Navbar from '../../components/NavBar/Navbar.jsx'

const EditProfile = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Datos guardados:\n${nombre} ${apellido}\n${correo}`);
  };

  return (
    <>
    <Header />
    <Navbar />
    <div className="overlay">
      <div className="modal">
        <h2>Editar perfil</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label>Apellido</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />

          <label>Correo electrónico</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <button type="submit" className="btn-guardar">Guardar cambios</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default EditProfile;
