// IngredientFilter Component: Allows users to filter meals by the main ingredient.
import React from 'react';

const IngredientFilter = ({ingredients = [], filterByIngredient }) => {

    return(
        <>
            <h1>Meals based on the ingredients</h1>
            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient.idIngredient} onClick={() => 
                        filterByIngredient(ingredient.strIngredient)}>
                        {ingredient.strIngredient}
                    </li>
                ))}    
            </ul>        
        </>
    )
}

export default IngredientFilter;

// Lists a set of main ingredients for filtering meals.
// Fetches data from https://www.themealdb.com/api/json/v1/1/list.php?i=list.
// When a user selects an ingredient, fetch meals using https://www.themealdb.com/api/json/v1/1/filter.php?i=INGREDIENT_NAME.
// Props: ingredients, filterByIngredient.