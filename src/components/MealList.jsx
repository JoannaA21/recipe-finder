// MealList Component: Displays a list of meals based on search results or filters.
import React from "react";
import MealCard from "./MealCard";
import ScrollToTop from "./ScrollToTop";

const MealList = ({ meals }) => {
  const categoryList = meals.filter((meal) => !meal.strYoutube);
  const searchedList = meals.filter((meal) => meal.strYoutube);
  return (
    // <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
    //   {meals.length ? (
    //     meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
    //   ) : (
    //     <p>No meals found.</p>
    //   )}
    // </div>

    <div className="container mx-auto px-4 pt-10">
      {/* Meals by selected category */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {categoryList &&
          categoryList.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
      </div>

      {/* Meals with instructions and YouTube links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {searchedList.length &&
          searchedList.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
      </div>
    </div>
  );
};

export default MealList;

// Displays meals based on search or selected filter.
// Maps through the meals state and renders a MealCard for each meal.
// Props: meals.
