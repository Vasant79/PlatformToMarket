import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";

const defaultText = [
  "Enhance fortune 50 company’s insights teams research capabilities",
  "Hi Vasant, a software engineer",
  "Frontend developer",
];

function Carousel({ text = defaultText }) {
  const [display, setDisplay] = useState(0);
  const [signal, setSignal] = useState(0);

  function handleNext() {
    setDisplay((prev) => (prev === text.length - 1 ? 0 : prev + 1));
  }

  function handlePrev() {
    setDisplay((prev) => (prev === 0 ? 1 : prev - 1));
  }

  const renderText = text.map((eachText, index) => {
    return (
      <div className="max-w-sm block lg:w-96 overflow-hidden" key={eachText}>
        {" "}
        {index === display ? eachText : null}
      </div>
    );
  });
  return (
    <div>
      {renderText}
      <FaRegCircle className="bg-color-green" />

      <button onClick={handleNext}>Next</button>
    </div>
  );
}
export default Carousel;
