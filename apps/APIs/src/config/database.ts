import { Sequelize } from "sequelize";
import "dotenv/config";

const NODE_ENV = process.env.NODE_ENV || "development";
const config = require("./config")[NODE_ENV];
const sequelize = new Sequelize(config);

export default sequelize;
