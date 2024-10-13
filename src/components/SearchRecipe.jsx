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
                <div className='search-container'>
                    <input 
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='Enter meal name'
                        className="search"
                    />
                    <button type='submit' className='btnSearch'>Search</button>
                </div>
            </form>
        </>
    )
}

export default SearchRecipe;


// A simple input field and button for entering a meal name.
// Props: query, setQuery, searchRecipes.
// Handles user input and triggers the search function.