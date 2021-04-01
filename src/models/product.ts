import db from '../config/dbConnection';
import Sequelize from 'sequelize';
import Order from './order';

const Product: any = db.define('product', {
    id:{
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        unique: true,
    },
    order_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'orders',
          key: 'id',
        },
     },
    product: {type: Sequelize.STRING,},
    brand: {type: Sequelize.STRING,},
    rate: {type: Sequelize.STRING,},
    quantity: {type: Sequelize.INTEGER,},
    gross_amount: {type: Sequelize.FLOAT},
    location: {type: Sequelize.STRING},
    date: {type: Sequelize.DATE},
});


export default Product;
