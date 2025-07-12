// 
import base from './base.js';

export async function obtenerProductos() {
  return await base.get('productos');
}

export async function obtenerProductoPorId(id) {
  return await base.get(`productos/${id}`);
}

export async function crearProducto(nuevoProducto) {
  return await base.post('productos', nuevoProducto);
}

export async function actualizarProducto(producto) {
  return await base.put('productos', producto);
}

export async function eliminarProducto(id) {
  return await base.remove(`productos/${id}`);
}
