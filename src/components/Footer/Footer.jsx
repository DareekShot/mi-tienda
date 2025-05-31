const Footer = () => {
  return (
    <footer>
      <div>
        <p><strong>Síguenos</strong></p>
        <div className="redes-sociales">
          <a href="https://facebook.com" target="_blank"><img src="/img/facebook.png" alt="Facebook" /></a>
          <a href="https://instagram.com" target="_blank"><img src="/img/instagram.png" alt="Instagram" /></a>
          <a href="https://youtube.com" target="_blank"><img src="/img/youtube.png" alt="YouTube" /></a>
        </div>
      </div>
      <div>
        <p><strong>Nosotros</strong></p>
        <p><a href="#">Conócenos</a></p>
        <p><a href="#">Nuestras tiendas</a></p>
      </div>
      <div>
        <p><strong>Atención al cliente</strong></p>
        <p><a href="#">Contáctanos</a></p>
        <p><a href="#">Preguntas frecuentes</a></p>
      </div>
      <div>
        <p><strong>Políticas y condiciones</strong></p>
        <p><a href="#">Privacidad</a></p>
        <p><a href="#">Términos y condiciones</a></p>
      </div>
    </footer>
  );
};

export default Footer;
// Este componente Footer muestra el pie de página de la aplicación.
// Incluye enlaces a redes sociales, información sobre la empresa, atención al cliente y políticas de privacidad y términos.