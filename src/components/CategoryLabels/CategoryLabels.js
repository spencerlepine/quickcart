import React, { useEffect } from 'react';
import useCategories from '../../context/CategoriesContext/CategoriesContext.js';
import CategorySelector from './CategorySelector/CategorySelector';
import useStyles from './styles';

const CategoryLabels = () => {
  const classes = useStyles();

  const { getAllCategories, initialFetch, allCategories } = useCategories();

  useEffect(() => {
    getAllCategories();
  }, [initialFetch]);

  const categoryComponents = allCategories.map((category, i) => (
    <CategorySelector categoryName={category} key={i} selectorValue={category} />
  ));

  return (<React.Fragment>
    {categoryComponents.length > 0 &&
      (<div className={classes.categoriesContainter}>
        <CategorySelector categoryName='all' selectorValue={null} />
        {categoryComponents}
      </div>)
    }
  </React.Fragment>);
}

export default CategoryLabels;