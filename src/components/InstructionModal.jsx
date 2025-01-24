import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
} from "@material-tailwind/react";

const InstructionModal = ({ meal, handleOpen, open }) => {
  return (
    <div className="text-lunargreen ">
      {open && (
        <Dialog
          className="w-full max-w-[80rem] flex-row "
          open={true}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <Card className="flex w-full max-w-[80rem] flex-row relative">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src={meal.strMealThumb}
                alt={`An image of ${meal.strMeal}`}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              {/* Close modal button */}
              <svg
                className="absolute top-4 right-4 w-6 h-6 text-lighterlunargreen hover:text-lunargreen transition-transform duration-500 ease-in-out hover:scale-125"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                onClick={handleOpen}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>

              {/* Modal meal name */}
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 text-lunargreen font-serif"
              >
                {meal.strMeal}
              </Typography>

              {/* Modal instruction */}
              <Typography color="gray" className="mb-12 font-serif">
                {meal.strInstructions}
              </Typography>

              {/* Modal Watch Tutorial button */}
              <Button
                variant="text"
                className="absolute bottom-4 right-4 font-serif bg-lighterlunargreen hover:bg-lunargreen hover:text-white"
                aria-label="Open youtube video tutorial"
              >
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch tutorial
                </a>
              </Button>
            </CardBody>
          </Card>
        </Dialog>
      )}
    </div>
  );
};

export default InstructionModal;
