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
  return (
    <Card className="w-full my-10">
      <CardHeader color="blue-gray" className="relative h-full">
        <img
          src={meal.strMealThumb}
          alt={`An image of ${meal.strMeal}`}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {meal.strMeal}
        </Typography>
        <Typography className="text-sm">{meal.strInstructions}</Typography>
      </CardBody>
      {meal.strYoutube && (
        <CardFooter className="pt-0">
          <Button>
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
