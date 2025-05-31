import { useState } from "react";
import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import productos from '../Producto/productos';


import { useSearchParams } from "react-router-dom";
import "./ResultadoBusqueda.css";

const Filtros = ({ categorias, seleccionada, onFiltrar }) => (
  <aside className="filtros">
    <h3>Categorías</h3>
    <ul>
      {categorias.map((cat, i) => (
        <li
          key={i}
          className={cat === seleccionada ? "activa" : ""}
          onClick={() => onFiltrar(cat)}
        >
          {cat}
        </li>
      ))}
    </ul>
  </aside>
);

const Producto = ({ nombre, precio, tipo, img }) => (
  <div className="producto">
    <img src={img} alt={nombre} />
    <p className="titulo-producto">{nombre}</p>
    <p className="precio">S/{precio} <span className="tipo-precio">{tipo}</span></p>
    <button>AGREGAR</button>
  </div>
);

const ResultadoBusqueda = () => {
  const [searchParams] = useSearchParams();
  const filtroInicial = searchParams.get("query") || "";

  const [orden, setOrden] = useState("nombre");
  const [filtroCat, setFiltroCat] = useState("Todas");

const productos = [
  { id: "zanahoria", nombre: "Zanahoria", descripcion: "Frescas y saludables", precio: "2.99", tipo: "KG", img: "/img/zanahoria.png", categoria: "Frutas y verduras" },
  { id: "papaya", nombre: "Papaya", descripcion: "Fruta tropical", precio: "5.99", tipo: "KG", img: "/img/papaya.jpg", categoria: "Frutas y verduras" },
  { id: "azucar", nombre: "Azúcar Rubia", descripcion: "Endulzante natural", precio: "8.99", tipo: "un", img: "/img/azucar.png", categoria: "Abarrotes" },
  { id: "avena", nombre: "Avena Instantánea", descripcion: "Avena para el desayuno", precio: "12.80", tipo: "un", img: "/img/avena.png", categoria: "Abarrotes" },
  { id: "cafe", nombre: "Café Altomayo", descripcion: "Café instantáneo 200g", precio: "7.35", tipo: "un", img: "/img/cafe.png", categoria: "Abarrotes" },
  { id: "leche", nombre: "Leche Gloria", descripcion: "Leche evaporada entera", precio: "4.50", tipo: "un", img: "/img/leche.jpg", categoria: "Lácteos" },
  { id: "pan", nombre: "Pan Integral", descripcion: "Pan saludable", precio: "3.20", tipo: "un", img: "/img/pan.png", categoria: "Panadería" },
  { id: "torta", nombre: "Torta de Chocolate", descripcion: "Postre delicioso", precio: "15.00", tipo: "un", img: "/img/torta.png", categoria: "Postres" },
  { id: "pollo", nombre: "Pollo Entero Fresco", descripcion: "Pollo fresco con menudencia", precio: "9.40", tipo: "KG", img: "/img/pollo.jpg", categoria: "Carnes" },
];

const categorias = ["Todas", ...new Set(productos.map(p => p.categoria))];

const filtrados = productos.filter(p =>
  (filtroCat === "Todas" || p.categoria === filtroCat) &&
  (
    p.nombre.toLowerCase().includes(filtroInicial.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(filtroInicial.toLowerCase()) ||
    p.categoria.toLowerCase().includes(filtroInicial.toLowerCase())
  )
).sort((a, b) => {
  if (orden === "precio") return parseFloat(a.precio) - parseFloat(b.precio);
  return a.nombre.localeCompare(b.nombre);
});

  return (
    <>
      <Header />
      <Navbar />
      <section className="resultados-section">
        <div className="contenedor-resultado">
          <Filtros categorias={categorias} seleccionada={filtroCat} onFiltrar={setFiltroCat} />
          <div className="resultados">
            <div className="barra-opciones">
              <h2>Resultados para: "{filtroInicial}"</h2>
              <label>
                Ordenar por:
                <select value={orden} onChange={(e) => setOrden(e.target.value)}>
                  <option value="nombre">Nombre</option>
                  <option value="precio">Precio</option>
                </select>
              </label>
            </div>
            <div className="contenedor-productos">
              {filtrados.length > 0 ? filtrados.map((p, i) => <Producto key={i} {...p} />) : <p>No se encontraron productos.</p>}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResultadoBusqueda;
