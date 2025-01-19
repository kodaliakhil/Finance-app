import express from "express";
import sequelize from "./src/config/database";
import "dotenv/config";
import migrateModels from "./src/db/migrations/migrate";

const app = express();
app.use(express.json());

// Sync database
async function DB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    try {
      migrateModels();
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
