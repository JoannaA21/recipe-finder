import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import CategoryList from "./components/CategoryList";
import MealList from "./components/MealList";
import AlphabetFilter from "./components/AlphabetFilter";
import Landing from "./components/Landing";

function App() {
  const [query, setQuery] = useState(""); // query (user’s search input)
  const [meals, setMeals] = useState([]); // meals (list of meals)
  const [category, setCategories] = useState([]); // categories (list of meal categories)

  //List of all possible categories
  useEffect(() => {
    const fetchCategoriesList = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.log("List of all categories: Failed fetching data.");
        setCategories([]);
      }
    };

    fetchCategoriesList();
  }, []);

  //handle user input in search input field
  const handleSearch = (item) => {
    if (item.trim() === "") {
      alert("Enter meal name or meal category in the input field.");
    } else {
      setQuery(item);
      fetchByMealName(item);
      // console.log(fetchByMealName(item))
    }
  };

  // Handle category selection
  const handleFilterByCategory = (category) => {
    setQuery(category);
  };

  // Search Recipes by Meal Name: Update the meals state with the results.
  const fetchByMealName = async (mealName) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
      );
      setMeals(response.data.meals || []);
    } catch (error) {
      console.log("Search by meal name: Failed fetching data.");
      setMeals([]);
    }
  };

  // Filter by Category Name: Update the meals state based on selected category.
  const fetchByCategoryName = async (categoryName) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      setMeals(response.data.meals || []);
    } catch (error) {
      console.log("Filter by Category Name: Failed fethcing data.");
      setMeals([]);
    }
  };

  // List Meals by First Letter: Update the meals state based on the selected letter.
  const fetchListMealsByFirstLetter = async (letter) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
      );
      setMeals(response.data.meals || []);
    } catch (error) {
      console.log("List Meals by First Letter: Failed fetching data.");
      setMeals([]);
    }
  };

  return (
    <>
      <Landing
        query={query}
        setQuery={setQuery}
        onSearchRecipes={handleSearch}
      />

      <CategoryList
        categories={category}
        filterByCategory={fetchByCategoryName}
      />
      {/* <AlphabetFilter filterByLetter={fetchListMealsByFirstLetter} /> */}

      <div className="meal-results">
        {meals.length > 0 ? <MealList meals={meals} /> : <p>No meals found.</p>}
      </div>
    </>
  );
}

export default App;
