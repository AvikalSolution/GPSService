'use strict';
module.exports = (sequelize, DataTypes) => {
  const LocationModel = sequelize.define('LocationModel', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    latitude: {type: DataTypes.DECIMAL},
    longitude: {type: DataTypes.DECIMAL}
  }, {});
  LocationModel.associate = function(models) {
    // associations can be defined here
  };
  return LocationModel;
};