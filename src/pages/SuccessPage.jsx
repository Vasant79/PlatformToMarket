import mainLogo from "../assets/mainLogo.svg";
import tickLogo from "../assets/tickLogo.svg";

function SuccessPage() {
  return (
    <div className="h-screen  flex flex-col justify-center items-center ">
      <div className="absolute top-0 left-0 m-5 px-4">
        <img src={mainLogo} alt="Logo" />
      </div>
      <div className="flex flex-col justify-center items-center lg:w-1/2 ">
        <span className="max-w-sm p-2 mb-2">
          <img src={tickLogo} alt="Success" />
        </span>

        <div className=" p-2 font-covered-by-your-grace text-3xl text-green">
          Success Submitted
        </div>
        <div className="p-2 mb-2 font-manrope font-medium text-4xl md:text-6xl">
          Congratulations
        </div>
        <div className=" p-2 mt-1 font-manrope font-extralight text-xl  text-grey text-center md:text-2xl">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </div>
        <div className="absolute bottom-0 mb-8 font-manrope text-xl">
          <span className="font-normal text-grey">
            Redirecting you to Homepage in{" "}
          </span>
          5 Seconds
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
