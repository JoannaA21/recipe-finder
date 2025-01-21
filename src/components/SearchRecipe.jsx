// SearchBar Component: Handles user input for searching recipes by meal name.
import React from "react";

const SearchRecipe = ({ query, setQuery, onSearchRecipes }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchRecipes(query); //search for the input, searchRecipes will be define in another component
    setQuery(""); //clears the input after each search
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter meal name"
            className="w-3/4 px-6 py-3 lg:px-8 lg:py-5 lg:text-2xl rounded-full text-lg text-black"
          />
          <button
            type="submit"
            className="px-6 py-3 text-lg lg:px-8 lg:py-5 lg:text-2xl bg-swirl hover:bg-darkerswirl hover:text-white text-white rounded-full"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchRecipe;

// A simple input field and button for entering a meal name.
// Props: query, setQuery, searchRecipes.
// Handles user input and triggers the search function.
