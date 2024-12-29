import express from 'express';
import sequelize from './config/database';
import User from './models/User';
import Wallet from './models/Wallet';
import Category from './models/Category';
import SubWallet from './models/SubWallet';
import Transaction from './models/Transaction';

const app = express();
app.use(express.json());

// Sync database
sequelize.sync({ force: true }).then(() => {
    console.log('Database synced successfully.');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
