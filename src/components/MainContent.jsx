import mainImage from "../assets/mainImage.svg";
import Advertise from "./Advertise";

function MainContent() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:mt-10 md:mb-8">
        <div className="font-covered-by-your-grace text-green text-4xl text-center lg:w-1/3 ">
          Success Stories
        </div>
        <div className="w-full mt-3 mb-12 pl-2 font-manrope text-semibold text-5xl text-center md:w-1/2  md:text-pretty">
          Every success journey <br />
          we’ve encountered.
        </div>
      </div>
      <Advertise />
    </div>
  );
}

export default MainContent;
