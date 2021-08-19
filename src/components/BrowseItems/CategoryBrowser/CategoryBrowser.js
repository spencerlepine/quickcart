import React from 'react';
import groceryCategories from 'config/schema/groceryCategories';
import CategoryItems from 'components/CategoryItems/CategoryItems';
import useStyles from './styles.js';

const CategoryBrowser = () => {
  const classes = useStyles();

  return (
    <div className="category-browser">
      <p className={classes.test}>under construction</p>
      {groceryCategories.map((category, i) => (
        <section className={classes.categorySection} key={i}>
          <h3>{category}</h3>
          <hr />
          <CategoryItems category={category} />
        </section>
      ))}
    </div>
  );
};

export default CategoryBrowser;
