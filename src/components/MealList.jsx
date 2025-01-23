// MealList Component: Displays a list of meals based on search results or filters.
import React from "react";
import MealCard from "./MealCard";

const MealList = ({ meals }) => (
  <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
    {meals.length ? (
      meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
    ) : (
      <p>No meals found.</p>
    )}
  </div>
);

export default MealList;

// Displays meals based on search or selected filter.
// Maps through the meals state and renders a MealCard for each meal.
// Props: meals.
