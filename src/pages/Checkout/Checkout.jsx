import './Checkout.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navbar from '../../components/NavBar/Navbar';
import ResumenLectura from '../../components/ResumenLectura/ResumenLectura';

function Checkout() {
  const navigate = useNavigate();

  const irAPago = () => {
    navigate('/checkout/payment');
  };

  return (
    <div>
      <Header />
      <Navbar />

      <div className="contenedorCheckout">
        <div className="formularioCheckout">
          <div className="tituloPrincipal">
            <h1>Dirección de envío</h1>
          </div>
          
          <div className="formularioScroll">
            <div className="bloquePaso">
              <form className="formEnvio" onSubmit={(e) => {
                e.preventDefault();
                irAPago();
              }}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" value="Juan" disabled />
                  </div>

                  <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" value="Pérez" disabled />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Ciudad</label>
                    <input type="text" value="Lima" disabled />
                  </div>

                  <div className="form-group">
                    <label>Departamento</label>
                    <input type="text" value="Lima" disabled />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Dirección</label>
                    <input type="text" value="Av. Ejemplo 123" disabled />
                  </div>

                  <div className="form-group">
                    <label>Código Postal</label>
                    <input type="text" value="15001" disabled />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Teléfono</label>
                    <input type="text" value="987654321" disabled />
                  </div>
                </div>

                <div className="form-row">
                  <button type="submit">
                    Continuar con el pago
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ResumenLectura />
      </div>
    </div>
  );
}

export default Checkout;