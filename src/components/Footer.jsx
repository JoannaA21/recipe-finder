import React from "react";

const Footer = () => {
  return (
    <footer className="h-20 border-t-2 py-4 text-center mt-[6rem]">
      <p>
        Powered by{" "}
        <a
          href="https://www.themealdb.com/api.php"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          TheMealDB API
        </a>
      </p>
      <p>&copy; {new Date().getFullYear()} Recipe Finder</p>
    </footer>
  );
};

export default Footer;
