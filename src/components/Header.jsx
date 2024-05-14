import mainLogo from "../assets/mainLogo.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleButton() {
    navigate("/registeration");
  }

  return (
    <div className="mb-20 md:h-24 m-5 flex justify-between items-center border border-grey-300  rounded-full">
      <img className="md:p-5 mx-8" src={mainLogo} alt="logo" />
      <div>
        <Button
          className={`p-2 m-2 font-manrope  border border-grey-300 text-black text-center
          hover:bg-btn-grey md:p-5 md:px-7 rounded-full `}
          label="  Get Projects"
          disabled={false}
          onClick={handleButton}
        />
        <Button
          className={`p-2 m-2 font-manrope bg-black border border-grey-300 text-white text-center
          hover:bg-btn-black md:p-5 md:px-7 rounded-full `}
          label="Onboard Talent"
          disabled={false}
        ></Button>
      </div>
    </div>
  );
}

export default Header;
