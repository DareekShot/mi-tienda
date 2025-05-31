import { useNavigate } from 'react-router-dom';
import './ResumenLectura.css';

function ResumenLectura({ mostrarBoton = false }) {
    const navigate = useNavigate();
    const datos = {
        subtotal: "100.00",
        descuento: "10.00",
        total: "90.00",
        cantidadTotal: 7
    };

    return (
        <div className="resumenCompra">
            <h3>Resumen de compra</h3>
            <p>
                Productos ({datos.cantidadTotal})
                <span>S/ {datos.subtotal}</span>
            </p>
            
            <p>
                Delivery
                <span className="gratis">GRATIS</span>
            </p>
            
            <p>
                Descuentos
                <span className="descuento">-S/ {datos.descuento}</span>
            </p>
            
            <hr />
            
            <p className="total">
                Total
                <span>S/ {datos.total}</span>
            </p>

            {mostrarBoton && (
                <button 
                    className="btnContinuar"
                    onClick={() => navigate('/checkout')}
                >
                    Continuar compra
                </button>
            )}
        </div>
    );
}

export default ResumenLectura;
