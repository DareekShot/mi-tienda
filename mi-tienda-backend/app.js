import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productoRoutes from './routes/productos.js';
import usersRouter from './routes/users.js';
import loginRouter from './routes/login.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.json({message: "Backend funcionando!"});
});

app.use('/api/users', usersRouter);
app.use('/api/productos', productoRoutes);
app.use('/api/login', loginRouter);


export default app;
