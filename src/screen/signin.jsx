import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { Button } from "../components/buttons";
import { Checkbox, Field } from "../components/inputs";
import { usersList } from "../lists";

function Signin() {
  const [isPaswordVisible, setIsPasswordVisible] = useState(false);
  const [userID, setUser] = useState("");
  const [passwordValue, setPassword] = useState("");
  const navigate = useNavigate();

  function togglePassword() {
    setIsPasswordVisible(!isPaswordVisible);
  }

  const userName = (event) => {
    const value = event.target.value;
    setUser(value);
  };

  const password = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  function signin() {
    const userSignin = usersList.find(
      (user) => user.username || user.email === userID
    );

    if (userSignin.password === passwordValue) {
      navigate("/home");
    } else {
      return false;
    }
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
            type="text"
            placeholder="Your username or email address"
            required={true}
            inputValue={userName}
          />
          <div className="relative flex items-center">
            {/* Password */}
            <Field
              type={!isPaswordVisible ? "password" : "text"}
              placeholder="Password"
              required={true}
              inputValue={password}
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
          {/* Remember Me */}
          <div className="flex pl-1 justify-between">
            <div className="flex gap-3">
              <Checkbox />
              <p className="text-subtitle">Remember me</p>
            </div>
            <Link to="/signup" className="text-base font-semibold">
              Forgot password?
            </Link>
          </div>

          <Button click={signin}>Sign In</Button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
