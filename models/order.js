"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { as: "user", foreignKey: "user_id" });
      this.hasMany(models.order_detail, { as: "order_detail", foreignKey: "order_id" });
    }
  }
  order.init(
    {
      status: DataTypes.STRING,
      total: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
      underscored: false,
    }
  );
  return order;
};
