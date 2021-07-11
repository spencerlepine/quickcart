const toTitleCase = (str) => {
  return str.replace(/_/g, ' ').replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export default toTitleCase;