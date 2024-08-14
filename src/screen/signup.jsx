import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { Button } from "../components/buttons";
import { Checkbox, Field } from "../components/inputs";

function Signup() {
  const [isPaswordVisible, setIsPasswordVisible] = useState(false);

  function togglePassword() {
    setIsPasswordVisible(!isPaswordVisible);
  }

  return (
    <div className="grid grid-cols-2 h-full max-md:grid-rows-2 max-md:grid-cols-1 ">
      {/* image */}
      <div className="relative h-screen w-full bg-holder flex justify-center max-md:h-full">
        <img
          src="images/icon/3legant..svg"
          alt="logo"
          className="absolute top-8"
        />
        <img
          src="images/chair-login.png"
          alt="foto de cadeira"
          className="object-contain"
        />
      </div>
      {/* login form */}
      <div className="w-4/5 flex flex-col gap-8 pl-22 pt-55 max-md:py-10 max-md:px-8 max-md:w-full">
        <div>
          <h1 className="text-section font-semibold pb-6">Sign Up</h1>
          <p className="text-subtitle text-base font-normal">
          Already have an account?{" "}
            <Link to="/signin" className="text-secondary2 font-semibold">
              Sign In
            </Link>
          </p>
        </div>

        {/* Form */}
        <form
          id="signin"
          className="w-full flex flex-col gap-8"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Field
            type="text"
            placeholder="Your name"
            required={true}
          />
          <Field
            type="text"
            placeholder="Username"
            required={true}
          />
          <Field
            type="email"
            placeholder="Email address"
            required={true}
          />
          <div className="relative flex items-center">
            <Field
              type={!isPaswordVisible ? "password" : "text"}
              placeholder="Password"
              required={true}
            />
            {!isPaswordVisible ? (
              <FiEye
                size={"24px"}
                className="absolute right-0 cursor-pointer stroke-dark hover:fill-dark hover:stroke-white hover:scale-125 duration-500 transition-all"
                onClick={togglePassword}
              />
            ) : (
              <FiEyeOff
                size={"24px"}
                className="absolute right-0 cursor-pointer stroke-dark hover:fill-dark hover:stroke-white hover:scale-125 duration-500 transition-all"
                onClick={togglePassword}
              />
            )}
          </div>
          <div className="flex pl-1 gap-3">
            <Checkbox required={true}/>
            <p className="text-subtitle">I agree with <b className="text-dark ">Privacy Policy</b> and <b className="text-dark">Terms of Use</b></p>
          </div>

          <Button>Sign Up</Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
