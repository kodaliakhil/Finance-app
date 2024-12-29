import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

class Wallet extends Model {}

Wallet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        balance: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0,
        },
    },
    { sequelize, modelName: 'Wallet' }
);

Wallet.belongsTo(User, { foreignKey: 'userId' });
export default Wallet;
