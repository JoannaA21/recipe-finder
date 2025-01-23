// MealCard Component: Displays details for a single meal including the image, name, and a brief description.

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const MealCard = ({ meal }) => {
  const formatInstructions = (instructions) => {
    if (!instructions) {
      return []; // Return an empty array if instructions are undefined
    }
    // return instructions.split(".").filter((step) => step.trim() !== "");
    return instructions
      .split(/(?<!\d)\.(?!\d|\w)/) // Split on periods that are not part of decimals or abbreviations
      .map((step) => step.trim()) // Trim whitespace from each step
      .filter((step) => step !== ""); // Filter out empty strings
  };

  const MealInstructions = ({ instructions }) => {
    const steps = formatInstructions(instructions);

    return (
      <div className="instructions">
        <p className="text-base font-bold mb-2">Cooking Instructions</p>
        <ul className="list-decimal pl-5 space-y-2">
          {steps.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}.
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Card className="w-full my-10">
      <CardHeader color="blue-gray" className="relative h-full bg-white">
        <img
          src={meal.strMealThumb}
          alt={`An image of ${meal.strMeal}`}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          {meal.strMeal}
        </Typography>
        {meal.strInstructions && (
          <Typography className="text-sm">
            <MealInstructions instructions={meal.strInstructions} />
          </Typography>
        )}
      </CardBody>
      {meal.strYoutube && (
        <CardFooter className="pt-0">
          <Button className="flex mx-auto">
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
              Watch tutorial
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default MealCard;
