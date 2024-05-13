import { data } from "../utils/AccordianMockData";
import Accordian from "./Accordian";

import accordianBg from "../assets/accordianBg.svg";

const FrequentQuestion = () => {
  return (
    <div className="w-auto mt-40 mx-5  bg-olive rounded-2xl md:mx-20 md:flex md:justify-center md:items-center ">
      <div className="pt-4 mx-10 md:w-1/2 md:mx-28 md:mt-20">
        <div className="px-2 text-2xl font-covered-by-your-grace text-accordian-grey">
          Whats on your mind
        </div>
        <div className="text-4xl font-manrope md:text-6xl">Ask Questions</div>
        <img
          className="hidden md:block md:w-2/3 md:h-2/3 md:mt-10 md:pt-10 md:relative  md:-left-28 text-black"
          src={accordianBg}
          alt="design"
        />
      </div>
      <div className="w-auto mx-5 mt-10 md:w-1/2">
        <Accordian data={data} />
      </div>
    </div>
  );
};

export default FrequentQuestion;
