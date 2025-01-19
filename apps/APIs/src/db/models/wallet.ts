"use strict";
import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import User from "./user";

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
    },
    parentWalletId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Wallet",
        key: "id",
      },
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
    modelName: "wallet",
  }
);

 
Wallet.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Wallet, { foreignKey: "userId" });

Wallet.hasMany(Wallet, { foreignKey: "parentWalletId", as: "childWallets" });
Wallet.belongsTo(Wallet, { foreignKey: "parentWalletId", as: "parentWallet" });

export default Wallet;
