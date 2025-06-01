import React, { useState } from 'react';
import './ChangePassword.css';
import Header from '../../components/Header/Header.jsx'
import Navbar from '../../components/NavBar/Navbar.jsx'


const ChangePassword = () => {
  const [actual, setActual] = useState('');
  const [nueva, setNueva] = useState('');
  const [confirmar, setConfirmar] = useState('');

  const restricciones = (e) => {
    e.preventDefault();
    if (nueva !== confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    alert("Contraseña cambiada correctamente.");
  };

  return (
    <> 
    <Header />
    <Navbar />
    <div className="overlay">
      <div className="modal">
        <h2>Cambiar contraseña</h2>
        <form onSubmit={restricciones}>
          <label>Contraseña actual</label>
          <input
            type="password"
            placeholder="********"
            value={actual}
            onChange={(e) => setActual(e.target.value)}
            required
          />

          <label>Nueva contraseña</label>
          <input
            type="password" //para ocultar 
            placeholder="********"
            value={nueva}
            onChange={(e) => setNueva(e.target.value)}
            required
          />

          <label>Confirmar nueva contraseña</label>
          <input
            type="password"
            placeholder="********"
            value={confirmar}
            onChange={(e) => setConfirmar(e.target.value)}
            required
          />

          <button type="submit" className="btn-confirmar">Cambiar contraseña</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ChangePassword;
