import productoRepository from '../repositories/productos.js';

const findAll = async (req, res) => {
  const productos = await productoRepository.findAll();
  res.json(productos);
};

const findOne = async (req, res) => {
  const producto = await productoRepository.findOne(req.params.id);
  res.json(producto);
};

const create = async (req, res) => {
  const nuevo = await productoRepository.create(req.body);
  res.json(nuevo);
};

const update = async (req, res) => {
  await productoRepository.update(req.body);
  res.json({ message: "Producto actualizado" });
};

const remove = async (req, res) => {
  await productoRepository.remove(req.params.id);
  res.json({ message: "Producto eliminado" });
};

export default {
  findAll,
  findOne,
  create,
  update,
  remove
};
