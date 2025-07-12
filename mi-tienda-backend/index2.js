import app from './app.js';
import sequelize from './config/database.js';


async function main() {
    try {
        const init = process.argv[2];

        if (init) {
            await sequelize.sync({ force: true });
        } else {
            await sequelize.sync({ force: false });
        }

        console.log('Base de datos sincronizada actualizada!');

        app.listen(3001, () => {
            console.log('Servidor escuchando en http://localhost:3001');
        });

    } catch (error) {
        console.log('Error al iniciar el servidor:');
    }
}
app.listen(3000,  () => {
    console.log('Servidor escuchando en http://localhost:3000')
})