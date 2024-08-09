import React from "react";

function HomeInfo() {
  return (
    <section className="mx-40 my-10 grid grid-cols-4 gap-6 max-md:grid-cols-2 max-md:mx-8">

      <div className="bg-holder flex flex-col gap-4 justify-center h-55 px-8 max-md:px-4">
        <img src="/images/icon/fast-delivery.svg" alt="icone de delivery" className="w-12"/>
        <div>
          <p className="text-xl font-medium max-md:text-sm max-md:font-semibold">Free Shipping</p>
          <span className="text-sm text-subtitle">Order above $200</span>
        </div>
      </div>

      <div className="bg-holder flex flex-col gap-4 justify-center h-55 px-8 max-md:px-4">
        <img src="/images/icon/money.svg" alt="icone de delivery" className="w-12"/>
        <div>
          <p className="text-xl font-medium max-md:text-sm max-md:font-semibold">Money-back</p>
          <span className="text-sm text-subtitle">30 days guarantee</span>
        </div>
      </div>

      <div className="bg-holder flex flex-col gap-4 justify-center h-55 px-8 max-md:px-4">
        <img src="/images/icon/lock.svg" alt="icone de delivery" className="w-12"/>
        <div>
          <p className="text-xl font-medium max-md:text-sm max-md:font-semibold">Secure Payments</p>
          <span className="text-sm text-subtitle">Secured by Stripe</span>
        </div>
      </div>

      <div className="bg-holder flex flex-col gap-4 justify-center h-55 px-8 max-md:px-4">
        <img src="/images/icon/call.svg" alt="icone de delivery" className="w-12"/>
        <div>
          <p className="text-xl font-medium max-md:text-sm max-md:font-semibold">24/7 Support</p>
          <span className="text-sm text-subtitle">Phone and Email support</span>
        </div>
      </div>
    </section>
  );
}

export default HomeInfo;
