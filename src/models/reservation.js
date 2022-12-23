'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.belongsTo(models.customer, {
        foreignKey: 'customerId',
        
      });
      Reservation.belongsTo(models.cabin, {
        foreignKey: 'cabinId',

      });
    }
  }
  Reservation.init({
    customerId: DataTypes.INTEGER,
    cabinId: DataTypes.INTEGER,
    tinaja: DataTypes.BOOLEAN,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    amount: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reservation',
  });
  return Reservation;
};