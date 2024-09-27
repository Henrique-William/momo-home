import { useState, useEffect } from "react";
import { ShopNow } from "./buttons";

function PromotionCount() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-10-31 : 23:59:59") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return false;
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (number) => {
    return String(number).padStart(2, "0");
  };

  return (
    <>
      {timeLeft && (
        <section className="grid grid-cols-2 h-fit max-md:grid-cols-1 max-md:grid max-md:grid-flow-dense">
          <img
            src="/images/promotion-img.png"
            alt=""
            className="max-md:order-2 w-full h-full object-cover max-md:w-full max-md:h-96"
          />
          {/* Count Down Container */}
          <div className="max-md:order-1 bg-promotion w-full h-full px-18 flex flex-col justify-center gap-6 max-md:px-8 max-md:py-7">
            {/* promotion title */}
            <div className="flex flex-col gap-4">
              <span className="text-secondary font-bold text-base uppercase">
                Promotion
              </span>
              <h2 className="text-5xl font-semibold max-md:text-4xl">
                Hurry up! 40% OFF
              </h2>
              <p className="text-xl max-md:text-sm">
                Thousands of high tech are waiting for you
              </p>
            </div>
            {/* countdown */}
            <div>
              <p className="mb-3 max-md:text-base">Offer expires in:</p>
              <div className="grid grid-cols-4 w-fit gap-4 text-4xl font-medium ">
                {/* days */}
                <div className="flex flex-col items-center">
                  <span className="flex justify-center items-center bg-white w-16 h-16">
                    {formatNumber(timeLeft.days) || "00"}
                  </span>
                  <p className="text-xs font-normal">Days</p>
                </div>
                {/* hours */}
                <div className="flex flex-col items-center">
                  <span className="flex justify-center items-center bg-white w-16 h-16">
                    {formatNumber(timeLeft.hours) || "00"}
                  </span>
                  <p className="text-xs font-normal">Hours</p>
                </div>
                {/* minutes */}
                <div className="flex flex-col items-center">
                  <span className="flex justify-center items-center bg-white w-16 h-16">
                    {formatNumber(timeLeft.minutes) || "00"}
                  </span>
                  <p className="text-xs font-normal">Minutes</p>
                </div>
                {/* seconds */}
                <div className="flex flex-col items-center">
                  <span className="flex justify-center items-center bg-white w-16 h-16">
                    {formatNumber(timeLeft.seconds) || "00"}
                  </span>
                  <p className="text-xs font-normal">Seconds</p>
                </div>
              </div>
            </div>
            {/* button */}
            <ShopNow>Shop Now</ShopNow>
          </div>
        </section>
      )}
    </>
  );
}

export default PromotionCount;
