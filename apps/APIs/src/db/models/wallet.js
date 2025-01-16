"use strict";
const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const Wallet = sequelize.define(
  "Wallet",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  {
    paranoid: true,
    freezeTableName: true,
    modelName: "Wallet",
  }
);

Wallet.associate = function (models) {
  Wallet.belongsTo(models.User, { foreignKey: "userId" });
};

module.exports = Wallet;