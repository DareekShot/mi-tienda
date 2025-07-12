import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import usersRouter from './routes/users.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.json({message: "Backend funcionando!"});
});

app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});

export default app;
