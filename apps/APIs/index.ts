import express from "express";
import sequelize from "./src/config/database";
import User from "./src/models/User";
import Wallet from "./src/models/Wallet";
import Category from "./src/models/Category";
import SubWallet from "./src/models/SubWallet";
import Transaction from "./src/models/Transaction";
import "dotenv/config";

const app = express();
app.use(express.json());

// Sync database
async function DB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    try {
      await sequelize.sync({ force: true });
      console.log("All models were synchronized successfully.");
    } catch (error) {
      console.error("Unable to synchronize models:", error);
    }
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
DB();


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Finance App API's",
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3001");
});


