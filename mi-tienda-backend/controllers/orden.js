import ordenRepository from '../repositories/orden.js';  // Importamos el repositorio de 'orden'

const findAll = async (req, res) => {
  try {
    const orders = await ordenRepository.findAll();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las órdenes" });
  }
};

const findOne = async (req, res) => {
  try {
    const order = await ordenRepository.findOne(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener la orden" });
  }
};

const create = async (req, res) => {
  try {
    const newOrder = await ordenRepository.create(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la orden" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;  // Obtener ID desde los parámetros de la URL
    const updatedOrder = await ordenRepository.update({ ...req.body, id });
    if (updatedOrder[0] === 0) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }
    res.json({ message: "Orden actualizada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar la orden" });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await ordenRepository.remove(req.params.id);
    if (deleted === 0) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }
    res.json({ message: "Orden eliminada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la orden" });
  }
};

export default {
  findAll,
  findOne,
  create,
  update,
  remove
};
