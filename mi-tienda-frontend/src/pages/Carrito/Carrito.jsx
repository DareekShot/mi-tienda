import { useNavigate } from 'react-router-dom';
import './Carrito.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/NavBar/Navbar';
import ResumenLectura from '../../components/ResumenLectura/ResumenLectura';
import imgPollo from '../../assets/pollo.jpg';
import imgLeche from '../../assets/leche.webp';  
import imgHuevo from '../../assets/huevo.jpg';
import imgGarbanzo from '../../assets/garbanzo.jpg';

function Carrito() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <Navbar />

            <div className="layoutCarrito">
                <div className="columnaProductos">
                    <div className="listaProductos">
                        <h2>Carro (10 productos)</h2>
                        <div className="cajaScroll">
                            <div className="productoItem">
                                <input type="checkbox" checked  />
                                <img src={imgPollo} alt="Pollo entero fresco"/>
                                <div className="infoItem">
                                    <h3>Pollo entero fresco con menudencia</h3>
                                    <p>Presentación 2.2 kg aprox</p>
                                    <p className="envio">Llega mañana</p>
                                    <div className="cantidadControl">
                                        <label>Cantidad:</label>
                                        <button >-</button>
                                        <span>2</span>
                                        <button >+</button>
                                        <button className="eliminar">🗑</button>
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
                                        <label>Cantidad:</label>
                                        <button >-</button>
                                        <span>1</span>
                                        <button >+</button>
                                        <button className="eliminar" >🗑</button>
                                    </div>
                                </div>
                                <div className="precio">S/22.65</div>
                            </div>

                            <div className="productoItem">
                                <input type="checkbox" checked  />
                                <img src={imgHuevo} alt="huevos"/>
                                <div className="infoItem">
                                    <h3>Huevos Pardos LA CALERA Paquete 30un</h3>
                                    <p>Presentación 30 unidades</p>
                                    <p className="envio">Llega mañana</p>
                                    <div className="cantidadControl">
                                        <label>Cantidad:</label>
                                        <button >-</button>
                                        <span>2</span>
                                        <button >+</button>
                                        <button className="eliminar" >🗑</button>
                                    </div>
                                </div>
                                <div className="precio">S/22.00</div>
                            </div>

                            <div className="productoItem">
                                <input type="checkbox" checked  />
                                <img src={imgGarbanzo} alt="garbanzo"/>
                                <div className="infoItem">
                                    <h3>Garbanzo costeño</h3>
                                    <p>Presentación 1kg aprox</p>
                                    <p className="envio">Llega mañana</p>
                                    <div className="cantidadControl">
                                        <label>Cantidad:</label>
                                        <button>-</button>
                                        <span>2</span>
                                        <button >+</button>
                                        <button className="eliminar" >🗑</button>
                                    </div>
                                </div>
                                <div className="precio">S/10.65</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columnaResumen">
                    <ResumenLectura mostrarBoton={true} />
                </div>
            </div>
        </div>
    );
}

export default Carrito;