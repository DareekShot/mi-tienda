import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [texto, setTexto] = useState("");
  const navigate = useNavigate();

  const buscar = () => {
    if (texto.trim()) {
      navigate(`/resultadoBusqueda?query=${encodeURIComponent(texto)}`);


    }
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
        <div className="usuario">
          👤 Usuario<br />
          <small>Juan Carlos Romaina </small>
        </div>
      </div>
    </header>
  );
};

export default Header;
