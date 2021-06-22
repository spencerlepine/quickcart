const groupItemsByCategory = (cartItems) => {
  // create an object with each category
  const categoryObject = {};
  for (let i = 0; i < cartItems.length; i++) {
    let thisCategory = cartItems[i].category
    if (categoryObject[thisCategory]) {
      categoryObject[thisCategory].push(cartItems[i])
    } else {
      categoryObject[thisCategory] = [cartItems[i]]
    }
  }

  // merge all the arrays BACK into one
  const allCartItems = []
  for (const category in categoryObject) {
    // sort these items alphabetically
    let categoryItems = categoryObject[category].slice()
    categoryItems = categoryItems.sort((itemA, itemB) => itemA.name - itemB.name)
    allCartItems.push(...categoryItems);
  }

  return allCartItems;
}

export default groupItemsByCategory;