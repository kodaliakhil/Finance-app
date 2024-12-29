import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Category from './Category';

class SubWallet extends Model {}

SubWallet.init(
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
    { sequelize, modelName: 'SubWallet' }
);

SubWallet.belongsTo(Category, { foreignKey: 'categoryId' });
export default SubWallet;
