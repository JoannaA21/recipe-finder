// CategoryList Component: Lists all meal categories and allows users to filter meals by selected category.
import React from 'react';

 const CategoryList = ({ categories = [],filterByCategory }) => {

    return(
        <>
            <h3>Meal Categories</h3>
            <ul className="meal-categories">
                {categories.map((category) => (
                    <li key={category.idCategory}> 
                        <button  onClick={() => filterByCategory(category.strCategory)}>
                            {category.strCategory}
                        </button>        
                    </li>
                ))}
            </ul>
        </>
    )
}


export default CategoryList;

// Displays a list of all meal categories fetched from TheMealDB.
// Allows users to select a category to filter meals.
// Fetch categories from this endpoint: https://www.themealdb.com/api/json/v1/1/categories.php.
// Props: categories, filterByCategory.


