import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import indicator from "../assets/indicator.svg";

const defaultText = [
  "Enhance fortune 50 company’s insights teams research capabilities",
  "Hi Vasant, a software engineer",
  "Frontend developer",
];

function Carousel({ text = defaultText }) {
  const [display, setDisplay] = useState(0);

  function handleNext() {
    setDisplay((prev) => (prev === text.length - 1 ? 0 : prev + 1));
  }

  function handlePrev() {
    setDisplay((prev) => (prev === 0 ? 1 : prev - 1));
  }

  const renderText = text.map((eachText, index) => {
    return (
      <div
        className={`w-auto p-5 h-52 font-manrope text-4xl lg:w-96 overflow-hidden 
        ${index === display ? "block" : "hidden"}`}
        key={eachText}
      >
        {eachText}
      </div>
    );
  });
  return (
    <div>
      <div className="mt-20 flex justify-center items-center">
        <div className="flex">
          <GoChevronLeft
            className="text-4xl text-gray-300 cursor-pointer"
            onClick={handlePrev}
          />
        </div>
        <div>{renderText}</div>
        <div>
          <GoChevronRight
            className="text-4xl text-gray-300 cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="flex ml-16">
        {text.map((_, index) => (
          <img
            key={index}
            src={indicator}
            alt="indicator"
            className={`h-4 w-4 mx-1 ${
              index === display ? "opacity-100" : "opacity-30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
export default Carousel;
