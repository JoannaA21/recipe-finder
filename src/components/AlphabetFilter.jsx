// AlphabetFilter Component: Lists the alphabet for filtering meals by their starting letter.
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const AlphabetFilter = ({ meals = [], filterByLetter }) => {
    // Create an array of letters from 'A' to 'Z' by splitting a string.
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); 
    const [meals, setMeals] = useState([]);

    return(
        <>
            <h1>Filter meals by letters</h1>
            <div>
                {/* Map over the 'letters' array to create a button for each letter. */}
                {letters.map((letter) => {
                     // Use 'key' for each button to ensure unique identification in the list.
                     // Attach an onClick event handler to each button that calls
                    <button key={letter} onClick={() => fetchMealsByLetter(letter)}>
                        {letter}
                    </button>
                })}
            </div>
            <ul>
                {meals.length > 0 ? (
                    meals.map((meal) => {
                        <li key={meal.idMeal} onClick={() => filterByLetter(meal.strMeal)}>
                            {meal.srtMeal}
                        </li>
                    })
                ) : 
                <p>No meals found for the selected letter.</p>}
            </ul>
        </>
    )
}

export default AlphabetFilter;



