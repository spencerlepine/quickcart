import C from '../schema/groceryCategories';

const sampleProducts = {
  [C.FROZEN_FOODS]: [
    {
      _id: 'jJfndBeufiJEhgfu',
      name: 'Pizza Rolls',
      purchase_size: { unit: 'oz', count: 24 },
      purchase_price: 5.99,
      serving_size: { unit: 'oz', count: 3 },
      servings_per: 8,
      brand: 'Tostino\'s',
      category: 'frozenFoods',
    },
  ],
  [C.MEAT]: [
    {
      _id: 'jJfndBufiJEhgfu',
      name: 'Ground Beef',
      purchase_size: { unit: 'lbs', count: 1 },
      purchase_price: 7.49,
      serving_size: { unit: 'oz', count: 3 },
      servings_per: 3,
      category: 'frozenFoods',
    },
  ],
  [C.FRUITS]: [
    {
      _id: 'jJfndfeufiJEhgfu',
      name: 'Bananas',
      purchase_size: { unit: 'lbs', count: 1 },
      purchase_price: 0.69,
      serving_size: { unit: 'grams', count: 118 },
      servings_per: 1,
      category: 'fruits',
    },
  ],
  [C.VEGETABLES]: [

  ],
  [C.PANTRY]: [
    {
      _id: 'jJfsadasufiJEhgfu',
      name: 'Peanut Butter',
      purchase_size: { unit: 'oz', count: 16 },
      purchase_price: 6.99,
      serving_size: { unit: 'oz', count: 10 },
      servings_per: 15,
      brand: 'Jiffy',
      category: 'pantry',
    },
  ],
  [C.DAIRY]: [

  ],
  [C.CANNED_GOODS]: [

  ],
  [C.BREAD]: [

  ],
  [C.CONDEMENTS]: [

  ],
  [C.BEVERAGES]: [

  ],
  [C.GRAINS]: [

  ],
  [C.SNACKS]: [

  ],
  [C.OTHER]: [

  ],
  [C.DESSERTS]: [

  ],
};

export default sampleProducts;
