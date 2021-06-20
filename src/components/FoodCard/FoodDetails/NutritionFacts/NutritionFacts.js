import React, { useState, useEffect } from "react"
import { NutritionLabel } from "react-fda-nutrition-facts"
import hasNutritionData from "../../../../modules/hasNutritionData"
import useStyles from "./styles"

const NutritionFacts = ({ nutFacts }) => {
  const [showNutritionFacts, setShowNutritionFacts] = useState(false)

  useEffect(() => {
    const validNutrition = hasNutritionData(nutFacts)
    setShowNutritionFacts(validNutrition)
  }, [nutFacts])

  if (showNutritionFacts) {
    return (
      <NutritionLabel
        servingSize={nutFacts.serving_size}
        servingsPerContainer={nutFacts.serving_quantity || 1}
        calories={Math.round(nutFacts.energy * 0.23900573614) || 0}
        totalFat={nutFacts.fat || 0}
        saturatedFat={nutFacts["saturated-fat"] || 0}
        transFat={nutFacts["trans_fat"] || 0}
        cholesterol={nutFacts.cholesterol || 0}
        sodium={nutFacts.sodium || 0}
        totalCarbs={nutFacts["carbohydrates_serving"] || 0}
        dietaryFiber={nutFacts["fiber"] || 0}
        sugars={nutFacts.sugars || 0}
        protein={nutFacts.proteins || 0}
        vitaminA={nutFacts["vitamin-a"] || 0}
        vitaminC={nutFacts["vitamin-c"] || 0}
        calcium={nutFacts.calcium || 0}
        iron={nutFacts.iron || 0}
      />
    )
  } else {
    return null
  }

}

export default NutritionFacts