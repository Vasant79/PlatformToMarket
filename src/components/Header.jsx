import mainLogo from "../assets/mainLogo.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleButton() {
    navigate("/registeration");
  }

  return (
    <div className="flex justify-between items-center">
      <img src={mainLogo} alt="logo" />
      <div>
        <Button
          className={`bg-black text-white text-center`}
          label="  Get Projects"
          disabled={false}
          onClick={handleButton}
        />
        <Button
          className={`text-center`}
          label="Onboard Talent"
          disabled={false}
        ></Button>
      </div>
    </div>
  );
}

export default Header;
