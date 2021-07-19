const parseUnitPrice = (sizeStr, priceString) => {
  try {
    const ounceRe = new RegExp(/.*[ ]+[ouncez]/, 'i');
    const gramRe = new RegExp(/.*[ ]+[grams]/, 'i');

    let unitCount = 0;
    let outputStr = 'u';
    if (ounceRe.test(sizeStr)) {
      var ounceCount = sizeStr.replace(/[ ]*[ouncez]/gi, '').trim();
      unitCount = parseFloat(ounceCount).toFixed(2);
      outputStr = 'oz'
    } else if (gramRe.test(sizeStr)) {
      var gramCount = sizeStr.replace(/[ ]*[grams]/gi, '').trim();
      unitCount = parseFloat(gramCount).toFixed(2);
      outputStr = 'g'
    }

    if (unitCount > 0) {
      const totalPrice = parseFloat(priceString).toFixed(2);
      const unitCost = totalPrice / ounceCount;
      if (unitCost > 0 && unitCost !== Infinity) {
        const formatedUnitCost = unitCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        return formatedUnitCost + '/' + outputStr;
      }
    }
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default parseUnitPrice;