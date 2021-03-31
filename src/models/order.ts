import db from '../config/dbConnection';
import Sequelize from 'sequelize';
import Product from './product';

const Order: any = db.define('order', {
  order_id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: false,
    unique: true,
  },
  order_number: {
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  }
});

Order.hasMany(Product, {
  foreignKey: 'order_id',
  as: 'products',
});

export default Order;