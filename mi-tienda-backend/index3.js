// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import productoRoutes from './routes/productos.js';
// import sequelize from './config/database.js';

// dotenv.config();

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Backend funcionando!');
// });

// app.use('/api/productos', productoRoutes);

// app.listen(PORT, async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Conexión exitosa a la base de datos.');
//   } catch (error) {
//     console.error('Error en la conexión a la BD:', error);
//   }
//   console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });
