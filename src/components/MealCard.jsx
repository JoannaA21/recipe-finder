// MealCard Component: Displays details for a single meal including the image, name, and a brief description.

import React from 'react';

const MealCard = ({ meal }) => {

    if(!meal){
        <p>No meal details available!</p>   
    }

    return(
        <>
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={`An image of ${meal.strMeal}`}/>
            <p>{meal.strInstructions}</p>
            {meal.strYoutube && 
                (<a href="{meal.strYoutube}"> 
                Watch tutorial</a>
            )}
        </>
    )
}


export default MealCard;