const Producto = ({ id, nombre, precio, img, descripcion, tipo }) => {
  const irADetalle = () => {
    window.location.href = `/detalleProducto?id=${id}`;
  };

  return (
    <div className="producto" onClick={irADetalle} style={{ cursor: "pointer" }}>
      <img src={img} alt={nombre} />
      <p className="titulo-producto">{nombre}</p>
      <p className="descripcion">{descripcion}</p>
      <p className="precio">S/{precio} <span className="tipo-precio">{tipo}</span></p>
      <button>AGREGAR</button>
    </div>
  );
};

export default Producto;
