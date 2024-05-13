import { data } from "../utils/AccordianMockData";
import Accordian from "./Accordian";

const FrequentQuestion = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-1/2 mx-16">
        Whats on your mind
        <br />
        Ask Questions
      </div>
      <div className="w-1/2 m-16">
        {/* accordian */}

        <Accordian data={data} />
      </div>
    </div>
  );
};

export default FrequentQuestion;
