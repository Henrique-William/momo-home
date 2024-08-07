import { useState, useEffect } from "react";

function PromotionCount() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-13 : 23:59:59") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
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
    <section className="grid grid-cols-2 h-fit">
      <img
        src="/images/promotion-img.png"
        alt=""
        className="w-full object-center"
      />
      {/* Count Down Container */}
      <div className="bg-promotion w-full px-18 flex flex-col justify-center gap-6">
        {/* promotion title */}
        <div className="flex flex-col gap-4">
          <span className="text-secondary font-bold text-base uppercase">
            Promotion
          </span>
          <h2 className="text-5xl font-semibold ">Hurry up! 40% OFF</h2>
          <p className="text-xl">Thousands of high tech are waiting for you</p>
        </div>
        {/* countdown */}
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
        {/* button */}
      </div>
    </section>
  );
}

export default PromotionCount;
