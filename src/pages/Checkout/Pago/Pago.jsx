import { useNavigate } from 'react-router-dom';
import './Pago.css';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/NavBar/Navbar';
import ResumenLectura from '../../../components/ResumenLectura/ResumenLectura';
import delivery from '../../../assets/delivery.png';
import check from '../../../assets/check.png';
import imgPollo from '../../../assets/pollo.jpg';
import imgLeche from '../../../assets/leche.webp';  
import imgHuevo from '../../../assets/huevo.jpg';
import imgGarbanzo from '../../../assets/garbanzo.jpg';

function PagoFinal() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Navbar />

      <div className="layoutPagoFinal">
        <div className="columnaProductos">
          <div className="tituloExito">
            <h1>Orden completada :)</h1>
            <p>Gracias por tu compra!</p>
          </div>

          <div className="productosResumen">
            <h3 className="subtituloResumen">Resumen de la compra</h3>
            <div className="listaProductos">
              <div className="productoItem">
                <input type="checkbox" checked />
                <img src={imgPollo} alt="Pollo entero fresco"/>
                <div className="infoItem">
                  <h3>Pollo entero fresco con menudencia</h3>
                  <p>Presentación 2.2 kg aprox</p>
                  <p className="envio">Llega mañana</p>
                  <div className="cantidadControl">
                    <label>Cantidad: 2</label>
                  </div>
                </div>
                <div className="precio">S/20.65</div>
              </div>

              <div className="productoItem">
                <input type="checkbox" checked />
                <img src={imgLeche} alt="leche gloria"/>
                <div className="infoItem">
                  <h3>Leche gloria</h3>
                  <p>Presentación 6 unidades</p>
                  <p className="envio">Llega mañana</p>
                  <div className="cantidadControl">
                    <label>Cantidad: 1</label>
                  </div>
                </div>
                <div className="precio">S/22.65</div>
              </div>

              <div className="productoItem">
                <input type="checkbox" checked />
                <img src={imgHuevo} alt="huevos"/>
                <div className="infoItem">
                  <h3>Huevos Pardos LA CALERA Paquete 30un</h3>
                  <p>Presentación 30 unidades</p>
                  <p className="envio">Llega mañana</p>
                  <div className="cantidadControl">
                    <label>Cantidad: 2</label>
                  </div>
                </div>
                <div className="precio">S/22.00</div>
              </div>

              <div className="productoItem">
                <input type="checkbox" checked />
                <img src={imgGarbanzo} alt="garbanzo"/>
                <div className="infoItem">
                  <h3>Garbanzo costeño</h3>
                  <p>Presentación 1kg aprox</p>
                  <p className="envio">Llega mañana</p>
                  <div className="cantidadControl">
                    <label>Cantidad: 2</label>
                  </div>
                </div>
                <div className="precio">S/10.65</div>
              </div>
            </div>
          </div>
        </div>

        <div className="columnaResumen">
          <div className="iconoCheckGrande">
            <img src={check} alt="Check" />
          </div>

          <ResumenLectura />

          <div className="direccionEnvio">
            <h4>Dirección de envío</h4>
            <p>Av la molina 12334<br />Lima - Lima<br />Celular de contacto: 990892131</p>
            <p><strong>Fecha de entrega aproximada: 04/05/2025</strong></p>
            <img src={delivery} alt="Delivery" className="iconoDelivery" />
          </div>

          <button 
            className="botonOfertas"
            onClick={() => navigate('/')}
          >
            Ver más ofertas
          </button>
        </div>
      </div>
    </div>
  );
}

export default PagoFinal;

