import grocerySchema from '../schema/groceryItem';
import toTitleCase from './toTitleCase';
import extractGroceryValue from './extractGroceryValue';
import filterNutriscoreObj from './filterNutriscoreObj';
import missingImage from '../images/missing.jpeg';

const getImageFromList = (obj) => {
  const imageList = obj.images;
  if (obj.images) {
    if (Array.isArray(imageList) && imageList.length > 0) {
      return imageList[0];
    }
  }
}

const formatGroceryObj = (resultObj = {}) => {
  const currentTime = new Date().getTime().toString();

  const formattedObj = {};
  for (const key in grocerySchema) {
    formattedObj[key] = extractGroceryValue(resultObj, key);
  }
  const shortenedName = (formattedObj.name).slice(0, 25);
  formattedObj.name = toTitleCase(shortenedName);

  formattedObj.category = (formattedObj.category).trim();
  formattedObj['_id'] = formattedObj['_id'] || currentTime;
  formattedObj.image = getImageFromList(resultObj) || formattedObj.image || missingImage;

  // Override some nutritional details
  const itemNutriscoreData = filterNutriscoreObj(formattedObj['nutriscore_data']);
  formattedObj['nutriscore_data']['total_carbs'] = itemNutriscoreData['carbs'] || itemNutriscoreData['carbohydrates_serving'];
  formattedObj['nutriscore_data']['energy'] = Math.round(itemNutriscoreData['calories'] / 0.23900573614) || itemNutriscoreData['carbohydrates_serving'];

  return formattedObj;
}

export default formatGroceryObj;