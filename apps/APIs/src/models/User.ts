import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {
    declare id: number;
    declare name: string;
    declare email: string;
}

User.init(
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    { sequelize, modelName: 'User' }
);


export default User;
