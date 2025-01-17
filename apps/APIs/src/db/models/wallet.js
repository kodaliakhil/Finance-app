"use strict";
const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const user = require("./user");

const Wallet = sequelize.define(
  "Wallet",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    parentWalletId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Wallet",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
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
  user.hasMany(Wallet, { foreignKey: "userId" });
  Wallet.hasMany(Wallet, { foreignKey: "parentWalletId" });
};


module.exports = Wallet;
