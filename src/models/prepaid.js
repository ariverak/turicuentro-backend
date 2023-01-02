'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prepaid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Prepaid.belongsTo(models.reservation,{
        foreignKey: 'reservationId',
        onDelete:'CASCADE',
      });
      models.reservation.hasMany(Prepaid);
    }
  }
  Prepaid.init({
    amount: DataTypes.INTEGER,
    date: DataTypes.DATE,
    reservationId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'prepaid',
  });
  return Prepaid;
};