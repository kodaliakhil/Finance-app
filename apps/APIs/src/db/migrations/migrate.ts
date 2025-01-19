import User from "../models/user";
import Category from "../models/category";
import Transaction from "../models/transaction";
import Wallet from "../models/wallet";

async function migrateModels() {
  await User.sync({ force: true });
  await Wallet.sync({ force: true });
  await Category.sync({ force: true });
  await Transaction.sync({ force: true });
}

export default migrateModels;
