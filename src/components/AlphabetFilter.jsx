// AlphabetFilter Component: Lists the alphabet for filtering meals by their starting letter.
import React from "react";

const AlphabetFilter = ({ filterByLetter }) => {
  // Create an array of letters from 'A' to 'Z' by splitting a string.
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("/");

  return (
    <>
      <div classNam="flex flex-col my-10 font-serif max-w-[80rem] mx-auto items-center">
        <p className="my-6 sm:my-10 lg:my-14 text-2xl md:text-3xl lg:text-4xl font-semibold text-lunargreen font-serif">
          Browse By Name
        </p>
        {/* Map over the 'letters' array to create a button for each letter. */}
        {letters.map((letter) => (
          // Use 'key' for each button to ensure unique identification in the list.
          // Attach an onClick event handler to each button that calls
          <button
            key={letter}
            className=""
            onClick={() => filterByLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </>
  );
};

export default AlphabetFilter;

{
  /* <ul>
                {meals.length > 0 ? (
                    meals.map((meal) => {
                        <li key={meal.idMeal} onClick={() => filterByLetter(meal.strMeal)}>
                            {meal.srtMeal}
                        </li>
                    })
                ) : 
                <p>No meals found for the selected letter.</p>}
            </ul> */
}
