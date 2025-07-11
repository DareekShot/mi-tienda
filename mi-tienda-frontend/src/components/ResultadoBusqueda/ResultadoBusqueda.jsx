import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Producto from "../Producto/Producto";
import { obtenerProductos } from "../../api/productosApi";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResultadoBusqueda = () => {
  const query = useQuery().get("query")?.toLowerCase() || "";
  const [productos, setProductos] = useState([]);
  const [orden, setOrden] = useState("nombre");
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

  useEffect(() => {
    const cargarProductos = async () => {
      const data = await obtenerProductos();
      setProductos(data);
    };

    cargarProductos();
  }, []);

  const categorias = ["Todas", ...new Set(productos.map(p => p.categoria))];

  const productosFiltrados = productos
    .filter(p =>
      (categoriaFiltro === "Todas" || p.categoria === categoriaFiltro) &&
      (p.nombre.toLowerCase().includes(query) ||
        p.descripcion?.toLowerCase().includes(query) ||
        p.categoria?.toLowerCase().includes(query))
    )
    .sort((a, b) => {
      if (orden === "precio") return parseFloat(a.precio) - parseFloat(b.precio);
      return a.nombre.localeCompare(b.nombre);
    });

  return (
    <>
      <Header />
      <Navbar />

      <section className="resultados-section">
        <div className="contenedor-resultado">
          <aside className="filtros">
            <h3>Categorías</h3>
            <ul>
              {categorias.map((cat, i) => (
                <li
                  key={i}
                  className={cat === categoriaFiltro ? "activa" : ""}
                  onClick={() => setCategoriaFiltro(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </aside>

          <div className="resultados">
            <div className="barra-opciones">
              <h2>Resultados para: "{query}"</h2>
              <label>
                Ordenar por:
                <select value={orden} onChange={(e) => setOrden(e.target.value)}>
                  <option value="nombre">Nombre</option>
                  <option value="precio">Precio</option>
                </select>
              </label>
            </div>

            <div className="contenedor-productos">
              {productosFiltrados.length > 0 ? (
                productosFiltrados.map((p) => <Producto key={p.id} {...p} />)
              ) : (
                <p>No se encontraron productos.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ResultadoBusqueda;
