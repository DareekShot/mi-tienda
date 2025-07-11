import { useEffect, useState } from "react";
import Header from './components/Header/Header.jsx';
import Navbar from './components/NavBar/Navbar.jsx';
import Banner from './components/Banner/Banner.jsx';
import Footer from './components/Footer/Footer.jsx';
import Producto from './components/Producto/Producto.jsx';
import Categoria from './components/Categoria/Categoria.jsx';
import { obtenerProductos } from './api/productosApi.js';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      const data = await obtenerProductos();
      setProductos(data);
    };

    cargarProductos();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <Banner />

      <section id="categorias" className="seccion">
        <h2>Explora las categorías</h2>
        <div className="contenedor-categorias">
          <Categoria nombre="Frutas" img="/img/banana.png" />
          <Categoria nombre="Carnes" img="/img/carne.png" />
          <Categoria nombre="Abarrotes" img="/img/arroz.png" />
        </div>
      </section>

      <section className="seccion">
        <h2>Lo más vendido</h2>
        <div className="contenedor-productos">
          {productos.map((p) => (
            <Producto key={p.id} {...p} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
