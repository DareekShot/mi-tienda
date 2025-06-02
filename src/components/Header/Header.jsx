import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const [texto, setTexto] = useState("");
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const buscar = () => {
    if (texto.trim()) {
      navigate(`/resultadoBusqueda?query=${encodeURIComponent(texto)}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header-superior">
      <div className="logo" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Mi-Tiendita <span className="punto-rojo">●</span>
      </div>

      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar un producto..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && buscar()}
        />
        <button onClick={buscar}>
          <img src="/img/buscar-icono.png" alt="Buscar" />
        </button>
      </div>

      <div className="acciones-superiores">
        <button className="btn-carrito" onClick={() => navigate("/carrito")}>
          🛒 Carrito <span>S/ 100.00</span>
        </button>

        <div className="navbar-links">
          {user ? (
            <>
              <Link to="/dashboard">Mi Cuenta</Link>
              <Link to="/profile/edit">Editar Perfil</Link>
              <button onClick={handleLogout} className="logout-button">
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link to="/login">MI CUENTA</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
