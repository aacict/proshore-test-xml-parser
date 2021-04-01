import db from '../config/dbConnection';
import Sequelize from 'sequelize';
import Product from './product';

const Order: any = db.define('order', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
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

export default Order;