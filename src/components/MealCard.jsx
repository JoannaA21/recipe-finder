// MealCard Component: Displays details for a single meal including the image, name, and a brief description.

import React, { useState } from "react";
import InstructionModal from "./InstructionModal";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const MealCard = ({ meal }) => {
  // Open modal when Instruction buttton is clicked
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Card className="w-full my-5">
        <CardHeader color="blue-gray" className="relative h-56 m-0">
          <img
            src={meal.strMealThumb}
            alt={`An image of ${meal.strMeal}`}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-center text-lunargreen font-serif cursor-default"
          >
            {meal.strMeal}
          </Typography>
        </CardBody>

        {/* Instructions button */}
        {meal.strInstructions && (
          <CardFooter className="flex md:px-1 lg:px-6 mx-auto pt-0 space-x-2 font-serif">
            <button
              type="button"
              onClick={handleOpen}
              className="px-3 py-1.5 xl:px-5 xl:py-2.5 rounded-lg font-semibold text-black bg-lighterlunargreen hover:bg-lunargreen hover:text-white"
              aria-label="Open Cooking Instructions Modal"
              aria-expanded={open}
            >
              Instructions
            </button>

            {/* Watch tutorial button */}
            <button
              className="px-3 py-1.5 rounded-lg font-semibold text-black bg-lighterlunargreen hover:bg-lunargreen hover:text-white"
              aria-label="Open youtube video tutorial"
            >
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch tutorial
              </a>
            </button>
          </CardFooter>
        )}
      </Card>

      {/* Modal */}
      {open && (
        <InstructionModal meal={meal} handleOpen={handleOpen} open={open} />
      )}
    </div>
  );
};

export default MealCard;
