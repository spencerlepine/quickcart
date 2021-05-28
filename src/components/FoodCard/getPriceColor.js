const getPriceColor = (priceFloat) => {
    if (priceFloat <= 0.10) {
        return "green" 
    } else if (priceFloat <= 0.20) {
        return "#9bb31c"
    } else if (priceFloat <= 0.30) {
        return "rgb(154 156 34)"
    } else if (priceFloat <= 0.40) {
        return "#b3851c"
    } else if (priceFloat <= 0.50) {
        return "#b3471c"
    }  else if (priceFloat > 0.50) {
        return "#7b2909"
    }
}
export default getPriceColor