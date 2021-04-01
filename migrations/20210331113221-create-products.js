'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
     product_id:{
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: false,
        unique: true,
    },
    order_id: {
        type: Sequelize.INTEGER.UNSIGNED,
     },
    name: {type: Sequelize.STRING,},
    brand: {type: Sequelize.STRING,},
    rate: {type: Sequelize.STRING,},
    quantity: {type: Sequelize.INTEGER,},
    gross_amount: {type: Sequelize.FLOAT},
    location: {type: Sequelize.STRING},
    order_date: {type: Sequelize.DATE},
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};