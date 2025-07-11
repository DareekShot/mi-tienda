import './PaymentMethod.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import Navbar from '../../../components/NavBar/Navbar'
import ResumenLectura from '../../../components/ResumenLectura/ResumenLectura'

const PaymentMethod = () => {
    const navegacion = useNavigate();
    const [selectedMethod, setSelectedMethod] = useState(null);

    const handleMethodSelect = function(method) {
        setSelectedMethod(method);
        if (method === 'qr') {
            navegacion('/checkout/qr');
        } else if (method === 'card') {
            navegacion('/checkout/card');
        }
    };

    return (
        <div className="app">
            <Header />
            <Navbar />
                <div className="main-content">
                <section className="contenedorCheckout">
                    <div className="formularioCheckout">
                        <div className="tituloPrincipal">
                            <h1>Método de pago</h1>
                        </div>

                        <div className="formularioScroll">
                            <div className="metodosPago">
                                <label className={selectedMethod === 'qr' ? 'filaMetodo seleccionado' : 'filaMetodo'}>
                                    <input 
                                        type="radio" 
                                        name="metodoPago" 
                                        checked={selectedMethod === 'qr'} 
                                        onChange={function() { handleMethodSelect('qr'); }} 
                                    />
                                    <span className="textoMetodo">Generar QR</span>
                                    <img src="/src/assets/generarQR.png" alt="QR" className="imgQR" />
                                </label>

                                <label className={selectedMethod === 'card' ? 'filaMetodo seleccionado' : 'filaMetodo'}>
                                    <input 
                                        type="radio" 
                                        name="metodoPago" 
                                        checked={selectedMethod === 'card'} 
                                        onChange={function() { handleMethodSelect('card'); }} 
                                    />
                                    <img src="/src/assets/tarjetas.png" alt="Tarjeta" className="imgTarjeta" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <ResumenLectura />
                </section>
            </div>
        </div>
    );
};

export default PaymentMethod;
