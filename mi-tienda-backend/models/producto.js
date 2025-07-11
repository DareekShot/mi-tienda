import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Producto = sequelize.define('Producto', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  precio: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING
  },
  categoria: {
    type: DataTypes.STRING
  },
  imagen: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'productos',
  timestamps: false
});

export default Producto;
