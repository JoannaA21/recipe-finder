// SearchBar Component: Handles user input for searching recipes by meal name.
import React from 'react';


const SearchRecipe = ( {query, setQuery, onSearchRecipes} ) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchRecipes(query); //search for the input, searchRecipes will be define in another component
        setQuery(''); //clears the input after each search
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setIput(e.target.value)}
                    placeholder='Enter meal name or meal category'
                />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}

export default SearchRecipe;


// A simple input field and button for entering a meal name.
// Props: query, setQuery, searchRecipes.
// Handles user input and triggers the search function.