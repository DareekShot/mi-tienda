import sequelize from "../config/database";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING(30), // Limitar longitud de email
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(30), // Limitar longitud de nombre
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(30), // Limitar longitud de apellido
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'), // Usar ENUM para roles
        allowNull: false,
        defaultValue: "user",
    },
    phone: {
        type: DataTypes.STRING(9), // Usar STRING para teléfono, con una longitud apropiada
        allowNull: true,
    },
    dni: {
        type: DataTypes.STRING(8), // Limitar longitud de DNI
        allowNull: true,
    },
});

export default User;
