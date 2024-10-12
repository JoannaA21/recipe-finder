// MealList Component: Displays a list of meals based on search results or filters.
import React from 'react';
import MealCard  from './MealCard';

const MealList = ({ meals }) => {

    return(
        <>
            {meals.map((meal) => {
                <MealCard meal={meal}/>
            })}
        </>
    )
}

export default MealList;


// Displays meals based on search or selected filter.
// Maps through the meals state and renders a MealCard for each meal.
// Props: meals.