import React from 'react';
import PropTypes from 'prop-types';
import groceryCategories from 'config/schema/groceryCategories';
import CategoryItems from 'components/CategoryItems/CategoryItems';
import useStyles from './styles.js';

const CategoryBrowser = ({ categoryProducts, isSavedProducts }) => {
  const classes = useStyles();

  const categories = Object.values(groceryCategories);

  return (
    <div className="category-browser">
      {categories.map(category => (
        <React.Fragment key={category}>
          {categoryProducts[category] && (
            <section className={classes.categorySection}>
              <h3 className={`${classes.categoryTitle}`}>{window.toTitleCase(category)}</h3>
              <hr />
              <CategoryItems category={category} products={categoryProducts[category]} isSavedProducts={isSavedProducts} />
            </section>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CategoryBrowser;

CategoryBrowser.propTypes = {
  categoryProducts: PropTypes.object.isRequired,
  isSavedProducts: PropTypes.bool.isRequired,
};
