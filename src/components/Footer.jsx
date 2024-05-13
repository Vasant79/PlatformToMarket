import copywright from "../assets/copywright.svg";

const Footer = () => {
  return (
    <div className="max-auto  mx-2 h-30 mt-10 bg-footer-color rounded-3xl md:h-36  md:mx-20 md:my-8 md:flex justify-between md:items-center ">
      <div className="flex gap-2 p-2">
        <img className="w-5 h-5 ml-12" src={copywright} alt="copyright" />
        Talup 2023. All rights reserved
      </div>

      <div className="p-2 flex justify-between items-center gap-4">
        <div className="mx-4 font-manrope font-normal underline">
          Terms & Conditions
        </div>
        <div className="mr-10 font-manrope font-normal underline">
          Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default Footer;
