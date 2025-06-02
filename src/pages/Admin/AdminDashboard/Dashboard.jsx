import { useState } from 'react'; 
import './Dashboard.css';
import Header from '../../../components/Header/Header';
import NavBar from '../../../components/NavBar/NavBar';
import Cards from '../../../components/Cards/Cards';
import TablaUser from '../../../components/TablaUsuarios/TablaUser';
import Paginacion from '../../../components/PaginacionAdmin/Paginacion';
import ListaProdu from '../../../components/ListaProductos/ListaProdu';
import DetalleUser from '../../../components/DetalleUsuario/DetalleUser';
import Footer from '../../../components/Footer/Footer';
const DashboardAdmin = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    return(
        <>
        <Header/>
        <NavBar/>

        <div>
        <main className='dashboard'>
        <section className='resumen'>
          <Cards  />

            </section>
            <section className='seccion-usuario'>
            <TablaUser onSelectUser={setSelectedUser} />
            {selectedUser && <DetalleUser user={selectedUser} />}
            </section>
            <section className='seccion-ordenes'>
            <ListaProdu/> 
            
            <Paginacion/>
            </section>
        </main>
        </div>
        <Footer/>
        </>
    )
}
export default DashboardAdmin;
