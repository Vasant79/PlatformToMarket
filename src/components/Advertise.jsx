import AdvertiseBlock from "./AdvertiseBlock";
import girlImage from "../assets/girlImage.svg";
import emphasize from "../assets/emphasize.svg";
import rocket from "../assets/rocket.svg";
import Carousel from "./Carousel";
import Button from "./Button";
import "./Advertise.css";

//task make carosul

function Advertise() {
  return (
    <div className="flex justify-around">
      <div className="relative hidden md:block md:h-auto ">
        <img className="rounded-3xl" src={girlImage} alt="image" />

        <div className="absolute top-20 -left-24 ">
          <AdvertiseBlock
            className="h-56 w-60 mt-20 z-1  bg-white text-grey rounded-2xl shadow-lg"
            svg={emphasize}
            heading="40%"
            content="Achieved reduction in project execution time by optimising team availability"
          />
        </div>
        <div className=" positionOfLeft bottom-5  left-custome-left">
          <AdvertiseBlock
            className="h-56 w-60 mt-20 z-1  bg-white rounded-2xl shadow-lg"
            heading="$0.5 MILLION"
            content="Reduced client expenses by saving on hiring and employee costs."
          />
        </div>
        <div className="absolute bottom-7 -left-20">
          <AdvertiseBlock
            className="h-20 w-60 z-1  bg-white rounded-full shadow-lg"
            svg={rocket}
            heading="10 days"
            content="Staff Deployment"
          />
        </div>
      </div>
      <div>
        <Carousel />
        <Button />
      </div>
    </div>
  );
}

export default Advertise;
