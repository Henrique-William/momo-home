import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { Button } from "../components/buttons";
import { Checkbox, Field } from "../components/inputs";

function Signin() {
  const [isPaswordVisible, setIsPasswordVisible] = useState(false);

  function togglePassword() {
    setIsPasswordVisible(!isPaswordVisible);
  }

  return (
    <div className="grid grid-cols-2 h-full max-md:grid-rows-2 max-md:grid-cols-1">
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
          <h1 className="text-section font-semibold pb-6">Sign In</h1>
          <p className="text-subtitle text-base font-normal">
            Don’t have an accout yet?{" "}
            <Link to="/signup" className="text-secondary2 font-semibold">
              Sign Up
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
          {/* Inputs */}
          <Field
            type="email"
            placeholder="Your username or email address"
            required={true}
          />
          <div className="relative flex items-center">
            {/* Password */}
            <Field
              type={!isPaswordVisible ? "password" : "text"}
              placeholder="Password"
              required={true}
            />
            {!isPaswordVisible ? (
              <FiEye
                size={"24px"}
                color="#6C7275"
                className="absolute right-0 cursor-pointer"
                onClick={togglePassword}
              />
            ) : (
              <FiEyeOff
                size={"24px"}
                color="#6C7275"
                className="absolute right-0 cursor-pointer"
                onClick={togglePassword}
              />
            )}
          </div>
          {/* Remember Me */}
          <div className="flex pl-1 justify-between">
            <div className="flex gap-3">
              <Checkbox/>
              <p className="text-subtitle">Remember me</p>
            </div>
            <Link to="/signup" className="text-base font-semibold">
              Forgot password?
            </Link>
          </div>

          <Button>Sign In</Button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
