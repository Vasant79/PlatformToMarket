import { useState } from "react";

const Accordian = ({ data }) => {
  const [showAnswer, setShowAnswer] = useState(Array(data.length).fill(false));

  function toggleAnswer(index) {
    setShowAnswer((prevState) => {
      let updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  }
  const renderData = data.map((item, index) => {
    return (
      <div key={item.question} onClick={() => toggleAnswer(index)}>
        <div> {item.question}</div>
        <br />
        <div> {showAnswer[index] && item.answer}</div>
      </div>
    );
  });

  return (
    <div>
      Accordian content
      {renderData}
    </div>
  );
};

export default Accordian;
