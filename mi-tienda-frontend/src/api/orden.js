import base from './base.js';  // Importamos las funciones de base.js

const endpoint = 'orden';  // El endpoint para las órdenes

// Función para obtener todas las órdenes
const getAllOrders = async () => {
  return await base.get(endpoint);
};

// Función para obtener una orden por su id
const getOrderById = async (id) => {
  return await base.get(`${endpoint}/${id}`);
};

// Función para crear una nueva orden
const createOrder = async (orderData) => {
  return await base.post(endpoint, orderData);
};

// Función para actualizar una orden existente
const updateOrder = async (id, orderData) => {
  return await base.put(`${endpoint}/${id}`, orderData);
};

// Función para eliminar una orden
const deleteOrder = async (id) => {
  return await base.remove(`${endpoint}/${id}`);
};

const ordenApi = { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder };

export default ordenApi;
