import Producto from '../models/producto.js';
import RepositoryBase from './base.js';

const productoRepository = new RepositoryBase(Producto);
export default productoRepository;
