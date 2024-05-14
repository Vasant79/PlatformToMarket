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
      <div className="relative hidden md:block md:h-auto md:ml-20 ">
        <img className="rounded-3xl" src={girlImage} alt="image" />

        <div className="absolute top-20 -left-24 ">
          <AdvertiseBlock
            className="h-56 w-60 mt-20 p-6 z-1  bg-white text-6xl text-black rounded-2xl shadow-lg"
            svg={emphasize}
            svgCss="absolute top-12 -left-5"
            heading="40%"
            content="Achieved reduction in project execution time by optimising team availability"
            contentCss="py-3 text-wrap text-base text-grey"
          />
        </div>
        <div className=" positionOfLeft bottom-5  left-custome-left">
          <AdvertiseBlock
            className="h-56 w-64 mt-20 p-5 pt-10 z-1 text-5xl text-white bg-darkGreen rounded-2xl shadow-lg"
            heading="$0.5"
            subheading="MILLION"
            subHeadingCss="px-2 text-2xl text-grey"
            content="Reduced client expenses by saving on hiring and employee costs."
            contentCss="py-3 font-manrope text-wrap text-base text-white"
          />
        </div>
        <div className="absolute bottom-7 -left-20">
          <AdvertiseBlock
            className="h-20 w-60  flex bg-white  rounded-full shadow-lg"
            svg={rocket}
            svgCss="absolute top-6 left-8"
            heading="10 days"
            headingCss="absolute top-2 left-20 font-manrope text-2xl"
            content="Staff Deployment"
            contentCss="mt-8  text-grey absolute top-2 left-20"
          />
        </div>
      </div>
      <div>
        <Carousel />
        <Button
          className={`p-4 m-10   font-manrope bg-black border border-grey-300 text-white text-center
          hover:bg-btn-black md:p-5 md:px-7 rounded-full `}
          label="Explore more"
          disabled={false}
        ></Button>
      </div>
    </div>
  );
}

export default Advertise;
