import { useSearchParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import productos from '../Producto/productos';
import { useState, useEffect } from "react";

// Elimina el array productos aquí

const DetalleProducto = () => {
  const [params] = useSearchParams();
  const id = params.get("id");
  const producto = productos.find((p) => p.id === id);

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
          <img src={producto.img} alt={producto.nombre} />
          <div className="detalle-info">
            <p><strong>Descripción:</strong> {producto.descripcion}</p>
           <p className="precio">
            <strong>Precio:</strong> S/{producto.precio} <span className="tipo-precio">{producto.tipo}</span>
          </p>
            <button className="btn-agregar">AGREGAR AL CARRITO</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetalleProducto;