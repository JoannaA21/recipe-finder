import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
} from "@material-tailwind/react";

const InstructionModal = ({ meal, handleOpen, open }) => {
  return (
    <div className="text-lunargreen">
      {open && (
        <Dialog
          size="xl"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem] sm:max-w-[42rem] lg:max-w-[64rem] max-h-[90vh] overflow-hidden">
            <CardHeader color="transparent" className="m-0 rounded-none">
              <img
                src={meal.strMealThumb}
                alt={`An image of ${meal.strMeal}`}
                className="h-64 w-full object-cover"
              />
            </CardHeader>
            <CardBody className="overflow-y-auto p-4">
              {/* Close modal button */}
              <button
                onClick={handleOpen}
                className="absolute top-2 right-2 hover:text-lunargreen transition-colors duration-300"
              >
                <svg
                  class="w-10 h-10 text-black sm:text-white hover:text-lighterlunargreen transition-colors duration-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              {/* Modal meal name */}
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 text-lunargreen font-serif cursor-default"
              >
                {meal.strMeal}
              </Typography>

              {/* Modal instruction */}
              <Typography
                color="gray"
                className="mb-8 font-serif cursor-default"
              >
                {meal.strInstructions}
              </Typography>

              {/* Modal Watch Tutorial button */}
              <div className="text-center">
                <Button
                  variant="text"
                  className="font-serif bg-lighterlunargreen hover:bg-lunargreen hover:text-white"
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
              </div>
            </CardBody>
          </Card>
        </Dialog>
      )}
    </div>
  );
};

export default InstructionModal;
