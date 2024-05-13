import mainImage from "../assets/mainImage.svg";
import Advertise from "./Advertise";

function MainContent() {
  return (
    <div>
      <div>
        <div className="font-covered-by-your-grace text-green text-4xl">
          Success Stories
        </div>
        <div className="max-w-md mt-3 mb-12 font-manrope text-semibold text-5xl text-center lg:max-w-lg">
          Every success journey we’ve encountered.
        </div>

        <Advertise />
      </div>
    </div>
  );
}

export default MainContent;
