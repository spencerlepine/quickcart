import { auth, db } from "../firebase.js"

export const fetchRecommended = async (req, res) => {
  try {
    const { uid: userId } = auth.currentUser

    // Fetch all of the grocery items
    let { docs } = await db.collection('users')
      .doc(userId)
      .collection("userGroceries")
      .get()
    const groceryItems = docs.map(doc => doc.data())

    // Extract available categories
    const allGroceryCategories = {};
    groceryItems.forEach((grocery) => {
      // Save unique category keys
      if (!allGroceryCategories[grocery.category]) {
        allGroceryCategories[grocery.category] = [];
      }
    });

    let { docs: cartItems } = await db.collection('users')
      .doc(userId)
      .collection("userCart")
      .get()
    const cartIds = cartItems.map(doc => doc.data().name)

    let todaysDate = new Date();

    // Group groceries by category
    let groupedGroceries = {}

    groceryItems.filter(grocery => {
      // Cross-reference stored cart data
      let thisId = grocery["name"];

      const itemInCart = cartIds.includes(thisId)

      if (!itemInCart) {
        // Get the date last purchased
        let dateString = grocery["last_purchased"];
        let groceryExpirationDate = new Date(dateString);

        // Find out how many days it ussually lasts
        let groceryLifeSpan = Math.round(
          grocery["purchase_price"] / grocery["serving_cost"]
        );
        
        groceryExpirationDate.setDate(
          groceryExpirationDate.getDate() + groceryLifeSpan
        );

        // If it is past when it expired
        let groceryExpired = (todaysDate >= groceryExpirationDate);

        if (groceryExpired) {
          let categoryArray = allGroceryCategories[grocery.category];
          categoryArray.push(grocery);
        }
      }
    });

    // Sort groceries
    for (const prop in allGroceryCategories) {
      let thisCategoryList = [...allGroceryCategories[prop]];
      // Sort by proirity
      thisCategoryList.sort((groceryA, groceryB) => {
        const priorityA = groceryA["priority"];
        const priorityB = groceryB["priority"];
        
        const servingCostA = Math.max(0, 5 - groceryA["serving_cost"] * 2.5);
        const servingCostB = Math.max(0, 5 - groceryB["serving_cost"] * 2.5);

        const lastPurchaseA = parseInt(
          (Date.now() - Date.parse(groceryA["last_purchased"])) / 100000000
        );
        const lastPurchaseB = parseInt(
          (Date.now() - Date.parse(groceryB["last_purchased"])) / 100000000
        );

        const scoreA = priorityA + servingCostA + lastPurchaseA;
        const scoreB = priorityB + servingCostB + lastPurchaseB;

        return scoreB - scoreA;
      });

      // Return top 6 from each category
      let topRange = 6;
      groupedGroceries[prop] = thisCategoryList.slice(0, Math.min(thisCategoryList.length, topRange))  
    }

    return groupedGroceries
  } catch (error) {
    console.log(error.message)
    return []
  }
};