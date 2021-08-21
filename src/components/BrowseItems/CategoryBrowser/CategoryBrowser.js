import React from 'react';
import PropTypes from 'prop-types';
import groceryCategories from 'config/schema/groceryCategories';
import CategoryItems from 'components/CategoryItems/CategoryItems';
import useStyles from './styles.js';

const CategoryBrowser = ({ cateogryProducts, isSavedProducts }) => {
  const classes = useStyles();

  const categories = Object.values(groceryCategories);
  return (
    <div className="category-browser">
      <p className={classes.test}>under construction</p>
      {categories.map((category, i) => (
        <section className={classes.categorySection} key={i}>
          <h3 className={`${classes.categoryTitle}`}>{window.toTitleCase(category)}</h3>
          <hr />
          <CategoryItems category={category} products={cateogryProducts[category] || {}} isSavedProducts={isSavedProducts} />
        </section>
      ))}
    </div>
  );
};

export default CategoryBrowser;

CategoryBrowser.propTypes = {
  cateogryProducts: PropTypes.object.isRequired,
  isSavedProducts: PropTypes.bool.isRequired,
};
