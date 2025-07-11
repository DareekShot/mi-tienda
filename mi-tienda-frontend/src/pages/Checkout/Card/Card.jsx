import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/NavBar/Navbar';
import ResumenLectura from '../../../components/ResumenLectura/ResumenLectura';
import './Card.css';
import tarjazul from '../../../assets/tarjazul.png';

function PaymentCard() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Navbar />
      <div className="contenedorCheckout">
        <div className="formularioCheckout">
          <div className="tituloPrincipal">
            <h1>Pagar con tarjeta</h1>
          </div>

          <div className="tarjetaFormularioContainer">
            <img src={tarjazul} alt="Tarjeta Azul" className="imgTarjeta" />

            <form className="formTarjeta">
              <div className="campo">
                <label htmlFor="nombre">Nombre del titular</label>
                <input 
                  type="text" 
                  id="nombre" 
                  value="Juan Pérez"
                  disabled
                />
              </div>
              <div className="campo">
                <label htmlFor="numero">Número de tarjeta</label>
                <input 
                  type="text" 
                  id="numero" 
                  value="1234 5678 9012 3456"
                  disabled
                />
              </div>
              <div className="grupoCampos">
                <div className="campo">
                  <label htmlFor="vencimiento">Vencimiento</label>
                  <input 
                    type="text" 
                    id="vencimiento" 
                    value="12/25"
                    disabled
                  />
                </div>
                <div className="campo">
                  <label htmlFor="cvv">CVV</label>
                  <input 
                    type="text" 
                    id="cvv" 
                    value="123"
                    disabled
                  />
                </div>
              </div>
              <button 
                type="button" 
                className="botonContinuar"
                onClick={() => navigate('/checkout/pago')}
              >
                Continuar
              </button>
            </form>
          </div>
        </div>

        <ResumenLectura />
      </div>
    </div>
  );
}

export default PaymentCard;
