import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formSchema } from "../utils/zodValidations";
import Button from "../components/Button";
import mainLogo from "../assets/mainLogo.svg";
import cancel from "../assets/cancel.svg";

function RegisterationPage() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (formData.name != "" && formData.email != "") {
      setDisabled(false);
    }
  }, [formData]);

  function handleCancel() {
    navigate("/");
  }

  function handleNameChange(event) {
    let value = event.target.value;
    setFormData({ ...formData, name: value });
  }

  function handleEmailChange(event) {
    let value = event.target.value;
    setFormData({ ...formData, email: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validate = formSchema.safeParse(formData);
    console.log(validate);
    if (!validate.success) {
      console.log("Enter a valid email addess");
      setError(true);
    } else {
      navigate("/success");
    }
  }

  return (
    <div className="h-screen">
      <div className="mx-12  p-2 flex justify-between ">
        <img src={mainLogo} alt="Logo" />
        <img
          className="mt-2 "
          src={cancel}
          alt="cancel"
          onClick={handleCancel}
        />
      </div>
      <div className="mt-10 pt-5 flex flex-col justify-center  items-center">
        <div className="font-covered-by-your-grace text-green text-4xl">
          Registration Form
        </div>
        <div className="max-w-md mt-3 mb-12 font-manrope text-semibold text-5xl text-center">
          Start your success Journey here!
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className=" h-16 w-full mt-4 pl-4  bg-hover-color rounded-full"
            placeholder="Enter your name"
            type="text"
            value={formData.name}
            onChange={handleNameChange}
          />
          <input
            className="h-16 w-full mt-6 pl-4 font-manrope  bg-hover-color rounded-full "
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleEmailChange}
          />

          <div className="w-full mt-2 pl-5 text-red ">
            {error && "Enter a valid email addess"}
          </div>

          <Button
            className="h-16 w-full mt-6 pl-4 bg-black text-white rounded-full "
            type="submit"
            label="Submit"
            disabled={disabled}
          />
        </form>
      </div>
    </div>
  );
}

export default RegisterationPage;
