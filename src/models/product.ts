import db from '../config/dbConnection';
import Sequelize from 'sequelize';

const Product: any = db.define('product', {
    product_id:{
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: false,
        unique: true,
    },
    order_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'orders',
          key: 'id',
        },
     },
    name: {type: Sequelize.STRING,},
    brand: {type: Sequelize.STRING,},
    rate: {type: Sequelize.STRING,},
    quantity: {type: Sequelize.INTEGER,},
    gross_amount: {type: Sequelize.FLOAT},
    location: {type: Sequelize.FLOAT},
    order_date: {type: Sequelize.FLOAT},
});

export default Product;
