import { useState } from "react";
import plusIcon from "../assets/plus.svg";
import minus from "../assets/minus.svg";

const Accordian = ({ data }) => {
  const [showAnswer, setShowAnswer] = useState(Array(data.length).fill(false));
  const [displayIcon, setDisplayIcon] = useState(Array(data.length).fill(true));

  function toggleAnswer(index) {
    setShowAnswer((prevState) => {
      let updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });

    setDisplayIcon((prevState) => {
      let newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }
  const renderData = data.map((item, index) => {
    return (
      <div key={item.question} onClick={() => toggleAnswer(index)}>
        <div className="flex justify-between font-manrope text-xl text-wrap">
          {" "}
          {item.question}
          {displayIcon[index] ? (
            <img className="mx-10" src={plusIcon} alt="icon" />
          ) : (
            <img className="mx-10" src={minus} alt="icon" />
          )}
        </div>
        <br />
        <div className="mb-2 font-manrope text-base text-grey">
          {" "}
          {showAnswer[index] && item.answer}
        </div>
      </div>
    );
  });

  return <div className="h-full pt-10">{renderData}</div>;
};

export default Accordian;
