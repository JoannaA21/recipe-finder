import React from "react";
import hero from "../assets/hero.jpg";
import SearchRecipe from "./SearchRecipe";

const Landing = ({ query, setQuery, onSearchRecipes }) => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-white">
        <div className="text-center">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font- mb-10">
            Recipe Finder
          </h1>
          <SearchRecipe
            query={query}
            setQuery={setQuery}
            onSearchRecipes={onSearchRecipes}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
