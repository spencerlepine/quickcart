const getPriceRank = (priceFloat) => {
    if (priceFloat <= 0.01) {
        return "?"
    } else if (priceFloat <= 0.10) {
        return "$"
    } else if (priceFloat <= 0.30) {
        return "$$"
    } else if (priceFloat <= 0.50) {
        return "$$$"
    } else if (priceFloat < 0.70) {
        return "$$$$"
    } else if (priceFloat > 0.70) {
        return "$$$$$"
    }
}
export default getPriceRank