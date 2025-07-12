import Orden from '../models/orden.js';  // Asegúrate de que la ruta sea correcta
import RepositoryBase from './base.js';

const ordenRepository = new RepositoryBase(Orden); // Creamos el repositorio para 'orden'

export default ordenRepository;
