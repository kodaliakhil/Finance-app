import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Wallet from './Wallet';
import SubWallet from './SubWallet';

class Transaction extends Model {}

Transaction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        transactionType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { sequelize, modelName: 'Transaction' }
);

Transaction.belongsTo(Wallet, { foreignKey: 'walletId' });
Transaction.belongsTo(SubWallet, { foreignKey: 'subWalletId' });
export default Transaction;
