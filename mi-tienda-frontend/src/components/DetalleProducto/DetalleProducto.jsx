import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { obtenerProductoPorId } from "../../api/productosApi";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const DetalleProducto = () => {
  const id = useQuery().get("id");
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const cargarProducto = async () => {
      const prod = await obtenerProductoPorId(id);
      if (prod && !prod.error) {
        setProducto(prod);
      } else {
        setProducto(null);
      }
    };

    cargarProducto();
  }, [id]);

  if (!producto) {
    return (
      <>
        <Header />
        <div className="seccion">
          <h2>Producto no encontrado</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <section className="seccion detalle-producto">
        <h2>{producto.nombre}</h2>
        <div className="detalle-contenido">
          <img src={producto.imagen} alt={producto.nombre} />
          <div className="detalle-info">
            <p><strong>Descripción:</strong> {producto.descripcion}</p>
            <p><strong>Precio:</strong> S/{producto.precio} <span className="tipo-precio">{producto.tipo}</span></p>
            <button className="btn-agregar">AGREGAR AL CARRITO</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DetalleProducto;
