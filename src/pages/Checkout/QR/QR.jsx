import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/NavBar/Navbar';
import ResumenLectura from '../../../components/ResumenLectura/ResumenLectura';
import './QR.css';

const PaymentQR = () => {
  const navigate = useNavigate();

  const handleContinuar = () => {
    navigate('/checkout/pago');
  };

  return (
    <>
      <Header />
      <Navbar />
      <section className="contenedorCheckout">
        <div className="formularioCheckout">
          <div className="tituloPrincipal">
            <h1>Pagar con QR</h1>
          </div>
          <div className="qrContainer">
            <img src="/src/assets/qr.png" alt="Código QR" className="qrImagen" />
            <p className="qrIndicaciones">Escanea este código QR con tu app bancaria para completar el pago.</p>
            <button className="botonContinuar" onClick={handleContinuar}>Continuar</button>
          </div>
        </div>

        <ResumenLectura />
      </section>
    </>
  );
};

export default PaymentQR;
