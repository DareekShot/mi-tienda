import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import User from "./users.js"; // Importar el modelo de usuario para establecer la relación

const Orden = sequelize.define("orden", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // La columna id será autoincremental
  },
  usuario: {
    type: DataTypes.INTEGER, // Cambiar a tipo INTEGER para hacer referencia al id del usuario
    allowNull: false, // No puede ser nulo
  },
  fechadeorden: {
    type: DataTypes.DATE, // El tipo de dato será una fecha
    allowNull: false, // No puede ser nulo
    defaultValue: DataTypes.NOW, // Por defecto, la fecha será la fecha actual
  },
  total: {
    type: DataTypes.DECIMAL(10, 2), // Total de la orden con dos decimales
    allowNull: false, // No puede ser nulo
  },
  estado: {
    type: DataTypes.ENUM("pendiente", "pagado", "cancelado"), // El estado puede ser pendiente, pagado o cancelado
    allowNull: false, // No puede ser nulo
    defaultValue: "pendiente", // Por defecto, la orden estará pendiente
  },
});

// Relación entre Orden y Usuario (relación de clave foránea)
// Cambiamos la relación para que haga referencia a la columna `id` de `users`
Orden.belongsTo(User, { foreignKey: "usuario", targetKey: "id" });

export default Orden;
