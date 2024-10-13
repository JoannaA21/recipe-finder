// MealCard Component: Displays details for a single meal including the image, name, and a brief description.

import React from 'react';


const MealCard = ({ meal }) => {
    return(
        <>

            <div className="meal-card">
                <div className="meal-info">
                    <h2>{meal.strMeal}</h2>
                    <img src={meal.strMealThumb} alt={`An image of ${meal.strMeal}`} />
                </div>
                <div className="meal-details">
                    <p>{meal.strInstructions}</p>
                    {meal.strYoutube && (
                    <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer"> 
                        Watch tutorial
                    </a>
                    )}
                </div>
            </div>

{/* 
            <div className="meal-card">
                <h1>{meal.strMeal}</h1>
                <img src={meal.strMealThumb} alt={`An image of ${meal.strMeal}`}/>
                <p>{meal.strInstructions}</p>
                {meal.strYoutube && 
                    (<a href={meal.strYoutube}> 
                    Watch tutorial</a>
                )}
            </div> */}

        </>
    )
}


export default MealCard;