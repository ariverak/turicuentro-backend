'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cabin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cabin.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cabin',
  });
  return Cabin;
};