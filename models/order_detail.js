"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    static associate(models) {
      this.belongsTo(models.user, { as: "user", foreignKey: "user_id" });
      this.belongsTo(models.item, { as: "item", foreignKey: "user_id" });
    }
  }
  order_detail.init(
    {
      user_id: DataTypes.INTEGER,
      item_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      sub_total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order_detail",
      underscored: true,
    }
  );
  return order_detail;
};
