const sampleProduct = {
  '_id': 'jJfndBeufiJEhgfu',
  'name': 'Pizza Rolls',
  'purchase_size': {
    'unit': 'oz',
    'count': 24,
  },
  'purchase_price': 5.99,
  'serving_size': {
    'unit': 'oz',
    'count': 3,
  },
  'servings_per': 8,
  'brand': 'Tostino\'s',
  'category': 'frozenFoods',
};

jest.mock('sampleProduct', () => ({
  sampleProduct: () => sampleProduct,
}));

export default sampleProduct;