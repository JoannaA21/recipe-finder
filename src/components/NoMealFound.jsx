import eggs_img from "../assets/no-meal-found-images/eggs.jpg";
import noodles_img from "../assets/no-meal-found-images/noodles.jpg";
import sub_img from "../assets/no-meal-found-images/sub-sandwich.jpg";
import pancake_img from "../assets/no-meal-found-images/pancake.jpg";

const NoMealFound = () => {
  const images = [
    {
      name: "Eggs",
      picture: eggs_img,
      phrase: "Discover",
    },
    {
      name: "Sub sandwich",
      picture: sub_img,
      phrase: "Tasty",
    },
    {
      name: "Pancakes",
      picture: pancake_img,
      phrase: "New",
    },
    {
      name: "Noodles",
      picture: noodles_img,
      phrase: "Recipes",
    },
  ];
  return (
    <div className="container mx-auto px-4 lg:mt-[10rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `url(${img.picture})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <p className="text-white text-5xl font-bold font-serif italic">
                {img.phrase}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoMealFound;
