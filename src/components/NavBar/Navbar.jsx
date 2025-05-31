const Navbar = () => {
  return (
    <nav className="barra-navegacion">
      <ul>
        <li><a href="#categorias">☰ Categorías</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Nosotros</a></li>
      </ul>
      <div className="ofertas">OFERTAS 👋</div>
    </nav>
  );
};

export default Navbar;