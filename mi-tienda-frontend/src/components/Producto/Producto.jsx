import { useNavigate } from "react-router-dom";

function Producto({ id, nombre, precio, tipo, imagen, descripcion }) {
  const navigate = useNavigate();

  const irADetalle = () => {
    navigate(`/detalleProducto?id=${id}`);
  };

  return (
    <div className="producto" onClick={irADetalle} style={{ cursor: "pointer" }}>
      <img src={imagen} alt={nombre} />
      <p className="titulo-producto">{nombre}</p>
      <p className="descripcion">{descripcion}</p>
      <p className="precio">
        S/{precio} <span className="tipo-precio">{tipo}</span>
      </p>
      <button>AGREGAR</button>
    </div>
  );
}

export default Producto;
