import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { sequelize, modelName: 'Category' }
);

Category.belongsTo(User, { foreignKey: 'userId' });
export default Category;
