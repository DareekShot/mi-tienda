import express from 'express';
import controller from '../controllers/login.js';

const router = express.Router();

// Ruta para login de usuario
router.post('/', controller.login);

export default router;
