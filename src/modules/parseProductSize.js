const parseOunceSize = (string) => {
  try {
    const seperateNumber = string.replace('oz', '').trim();
    return parseInt(seperateNumber);
  } catch (err) {
    console.log(err);
    return -1;
  }
}

export default parseOunceSize;