module.exports = {
  ...require('./controllers/groceries.js'),
  ...require('./controllers/categories.js'),
  ...require('./controllers/recommended.js'),
  ...require('./controllers/cart.js'),
}