import account from './account/index.js';
import cart from './cart/index.js';
import logs from './logs/index.js';
import saved from './saved/index.js';
import suggested from './suggested/index.js';

const firebaseAPI = {
  account,
  cart,
  logs,
  saved,
  suggested,
};

export default firebaseAPI;
