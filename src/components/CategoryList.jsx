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
      <div className="flex flex-col font-serif max-w-[80rem] mx-auto items-center">
        <p className="my-6 sm:my-10 lg:my-14 text-2xl md:text-3xl lg:text-4xl font-semibold text-lunargreen font-serif">
          Meal Categories
        </p>
        <ul className="flex text-xs justify-center items-center">
          <button onClick={handlePrev} disabled={startIndex === 0}>
            <svg
              class="w-6 h-6 sm:w-8 sm:h-8 text-lighterlunargreen hover:text-lunargreen sm:mx-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
          {categories
            .slice(startIndex, startIndex + itemsToShow)
            .map((category) => (
              <li
                key={category.idCategory}
                className=" sm:transition-transform sm:duration-500 sm:ease-in-out sm:hover:scale-110 "
              >
                <button onClick={() => filterByCategory(category.strCategory)}>
                  <img
                    src={category.strCategoryThumb} // Assuming this property holds the image URL
                    alt={category.strCategory}
                    className="w-full h-auto"
                  />
                  <p>{category.strCategory}</p>
                </button>
              </li>
            ))}
          <button
            onClick={handleNext}
            disabled={startIndex + itemsToShow >= categories.length}
          >
            <svg
              class="w-6 h-6 sm:w-8 sm:h-8 text-lighterlunargreen hover:text-lunargreen sm:mx-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </ul>
      </div>
    </>
  );
};

export default CategoryList;

// Displays a list of all meal categories fetched from TheMealDB.
// Allows users to select a category to filter meals.
// Fetch categories from this endpoint: https://www.themealdb.com/api/json/v1/1/categories.php.
// Props: categories, filterByCategory.
