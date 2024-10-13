import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './styles/App.css';
import SearchRecipe from './components/SearchRecipe';
import IngredientFilter from './components/IngredientFilter';
import CategoryList from './components/CategoryList';
import MealList from './components/MealList';
import AlphabetFilter from './components/AlphabetFilter';

function App() {
  const [query, setQuery] = useState(''); // query (user’s search input)
  const [meals, setMeals] = useState([]); // meals (list of meals)
  const [category, setCategories] = useState([]); // categories (list of meal categories)
  const [ingredients, setIngredients] = useState([]); // ingredients (list of ingredients)

  const [showCategories, setShowCategories] = useState(false);

  //List of all possible categories
  useEffect(() => {
    const fetchCategoriesList = async() => {
      try{
        const response =  await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(response.data.categories);
      }catch(error){
        console.log("List of all categories: Failed fetching data.");
        setCategories([]);
      }
    }

    fetchCategoriesList();

  }, []);


  //List of all ingredients
  useEffect(() => {
    const fetchIngredients = async() =>{
      try{
        const response =  await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        setIngredients(response.data.meals);
      }catch(error){
        console.log("List of all ingredients: Failed fetching data.");
        setIngredients([]);
      }
    }

    fetchIngredients();

  }, []);


  //handle user input in search input field
  const handleSearch = (item) => {
    if(item.trim() === ""){
      alert("Enter meal name or meal category in the input field.")
    }else{
      setQuery(item);
      fetchByMealName(item);
      // console.log(fetchByMealName(item))
    }
  }

  // Handle category selection
  const handleFilterByCategory = (category) => {
    setQuery(category);
  };

  // Handle ingredient selection
  const handleFilterByIngredient = (ingredient) => {
    setQuery(ingredient);
  };

  // Search Recipes by Meal Name: Update the meals state with the results.
  const fetchByMealName = async(mealName) => {
        try{
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
          setMeals(response.data.meals || []);
        }catch(error){
          console.log("Search by meal name: Failed fetching data.")
          setMeals([]);
        }
      };


  // Filter by Main Ingredient: Update the meals state based on selected ingredient.
  const fetchByMainIngredient = async(ingredientName) => {
    try{
      const response = await axios.get(`API Endpoint: https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`);
      setMeals(response.data.meals || []);
    }catch(error){
      console.log("Search by  main ingredients: Failed to fetch data.");
      setMeals([]);
    }
  };


  // Filter by Category Name: Update the meals state based on selected category.
  const fetchByCategoryName = async(categoryName) => {
    try{
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
      setMeals(response.data.meals || []);
    }catch(error){
      console.log("Filter by Category Name: Failed fethcing data.");
      setMeals([]);
    }
  }


  // List Meals by First Letter: Update the meals state based on the selected letter.
  const fetchListMealsByFirstLetter = async(letter) => {
    try{
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
      setMeals(response.data.meals || []);
    }catch(error){
      console.log("List Meals by First Letter: Failed fetching data.");
      setMeals([]);
    }
  }


  const filterByLetter = (letter) => {
    // Implement the function to filter meals by the selected letter.
    console.log(`Filtering by letter: ${letter}`);
};

    return (
    <>
      <Router>
        <h1>Recipe Search App</h1>
{/*         
        {!showCategories && (
          <>
            <Link to="/categories">
              <button>Meals by Category</button>
            </Link>
          </>
        )} */}

        <button onClick={() => setShowCategories(!showCategories)}>
          {showCategories ? <Link to='/categories'>Meals By Category</Link> :
          <Link to='/'>Back</Link> }
        </button>
      
        <Routes>

            <Route path='/' element={
              <SearchRecipe query={query} setQuery={setQuery}  onSearchRecipes={handleSearch}/>
            } />

            <Route path="categories" element={
              <CategoryList categories={category} filterByCategory={fetchByCategoryName} />
            } />

            <Route path='letter' element={
              <AlphabetFilter filterByLetter={fetchListMealsByFirstLetter} />
            } />

        </Routes>
       
          <div className="meal-results">
            {meals.length > 0 ? (
              <MealList meals={meals} />
            ) : (
              <p>No meals found.</p>
            )}
          </div>
          
          <AlphabetFilter filterByLetter={fetchListMealsByFirstLetter} />

      </Router>
    </>
  )
}

export default App


// 5. Add Functionality to Components
// In App.js:
// Pass meals, query, and setter functions (setQuery, searchRecipes, etc.) as props to respective components.
// Create functions to handle category selection, ingredient selection, and letter-based filtering.


// In SearchBar:
// Call searchRecipes on button click to fetch recipes by name.


// In CategoryList:
// Render categories and call filterByCategory when a category is selected.

// In IngredientFilter:
// Render a list of ingredients and call filterByIngredient on selection.


// In AlphabetFilter:
// Render letters A-Z and call filterByLetter on letter click.