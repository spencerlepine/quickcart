import React from "react";
import toTitleCase from "../../../../../../modules/toTitleCase"

const CategoryDropdown = (allCategories) => {
  let categoryOptions = allCategories.map((category, i) => {
    return <option key={i} value={category}>{toTitleCase(category)}</option>;
  });

  const dropdowns = [<option label="None" value="" key={999} />, ...categoryOptions]

  return dropdowns
};

export default CategoryDropdown
