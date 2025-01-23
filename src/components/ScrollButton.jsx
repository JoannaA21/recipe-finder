import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <div>
      <Button
        onClick={scrollToTop}
        // style={{ display: visible ? "inline" : "none" }}
      >
        <svg
          className="w-6 h-6 bg-black text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v13m0-13 4 4m-4-4-4 4"
          />
        </svg>
      </Button>
    </div>
  );
};

export default ScrollButton;
