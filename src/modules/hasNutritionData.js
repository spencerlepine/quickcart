import nutriscoreSchema from "./schema/nutriscoreSchema"
const MIN_VALUES = 0;

const hasNutritionData = (nutritionObj) => {
  let validValues = 0;

  // Make sure at least THREE fields are not the shema
  for (const key in nutriscoreSchema) {
    const nutritionVal = nutritionObj[key]

    if (nutritionVal && nutritionVal !== nutriscoreSchema[key]) {
      validValues += 1;
    }

    if (validValues > MIN_VALUES) {
      return true
    }
  }
  return false
}

export default hasNutritionData