// CategoryList Component: Lists all meal categories and allows users to filter meals by selected category.

import React, { useState } from "react";

const CategoryList = ({ categories = [], filterByCategory }) => {
  const [startIndex, setStartIndex] = useState(0); // Tracks the starting index of the visible categories
  const itemsToShow = 5; // Number of items to display at a time

  const handleNext = () => {
    if (startIndex + itemsToShow < categories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <>
      <h3>Meal Categories</h3>

      <ul className="">
        <button onClick={handlePrev} disabled={startIndex === 0}>
          Left
        </button>
        {categories
          .slice(startIndex, startIndex + itemsToShow)
          .map((category) => (
            <li key={category.idCategory} className="">
              <button onClick={() => filterByCategory(category.strCategory)}>
                <img
                  src={category.strCategoryThumb} // Assuming this property holds the image URL
                  alt={category.strCategory}
                  className=""
                />
                <p>{category.strCategory}</p>
              </button>
            </li>
          ))}
        <button
          onClick={handleNext}
          disabled={startIndex + itemsToShow >= categories.length}
        >
          Right
        </button>
      </ul>
    </>
  );
};

export default CategoryList;

// Displays a list of all meal categories fetched from TheMealDB.
// Allows users to select a category to filter meals.
// Fetch categories from this endpoint: https://www.themealdb.com/api/json/v1/1/categories.php.
// Props: categories, filterByCategory.
