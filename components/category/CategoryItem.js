import React from 'react';


function CategoryItem({ category, selectedCategory, onClickHandler }) {
  const isSelected = category.strCategory === selectedCategory;

  return (
    <button
      type="button"
      
      onClick={onClickHandler}
    >
      {category.strCategory}

    </button>
  );
}

export default CategoryItem;
