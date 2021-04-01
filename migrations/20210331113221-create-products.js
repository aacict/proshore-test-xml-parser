'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
     id:{
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        unique: true,
    },
    order_id: {
        type: Sequelize.INTEGER.UNSIGNED,
     },
    product: {type: Sequelize.STRING,},
    brand: {type: Sequelize.STRING,},
    rate: {type: Sequelize.STRING,},
    quantity: {type: Sequelize.INTEGER,},
    gross_amount: {type: Sequelize.FLOAT},
    location: {type: Sequelize.STRING},
    date: {type: Sequelize.DATE},
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};