import express from 'express';
import controller from '../controllers/orden.js';  // Importamos el controller de 'orden'

const router = express.Router();

router.get('/', controller.findAll);  // Ruta para obtener todas las órdenes
router.get('/:id', controller.findOne);  // Ruta para obtener una orden por su ID
router.post('/', controller.create);  // Ruta para crear una nueva orden
router.put('/:id', controller.update);  // Ruta para actualizar una orden
router.delete('/:id', controller.remove);  // Ruta para eliminar una orden

export default router;
