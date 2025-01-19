("use strict");
import { DataTypes } from "sequelize";
import sequelize from "../../config/database";
import Wallet from "./wallet";
import Category from "./category";
const Transaction = sequelize.define(
  "Transaction",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    walletId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Wallet",
        key: "id",
      },
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transactionType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Category",
        key: "id",
      },
    },
    description: {
      type: DataTypes.STRING,
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
    tableName: "Transaction",
  }
);

Transaction.belongsTo(Wallet, { foreignKey: "walletId" });
Wallet.hasMany(Transaction, { foreignKey: "walletId" });

Transaction.belongsTo(Category, { foreignKey: "categoryId" });


export default Transaction;
