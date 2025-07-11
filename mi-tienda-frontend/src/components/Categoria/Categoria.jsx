const Categoria = ({ nombre, img }) => {
  return (
    <div className="categoria">
      <img src={img} alt={nombre} />
      <p>{nombre}</p>
    </div>
  );
};

export default Categoria;
// Este componente Categoria muestra una categoría de productos con su imagen y nombre.
// Se utiliza para representar diferentes categorías de productos en la tienda, como frutas, verduras, carnes, etc.