function Socials() {
  return (
    <section>
      <div className="mx-40 my-10 flex flex-col gap-10 max-md:mx-8 max-md:">
        <div className="flex flex-col gap-4 items-center">
          <p className="text-base text-subtitle uppercase font-bold">
            newsfeed
          </p>
          <h2 className="text-5xl font-medium max-md:text-3xl max-md:font-semibold">
            Instagram
          </h2>
          <p className="text-xl text-center max-md:text-sm">
            Follow us on social media for more discount & promotions
          </p>
          <p className="text-xl text-subtitle font-semibold">
            @3legant_official
          </p>
        </div>
        <div className="w-full flex flex-wrap gap-6 justify-center">
          <img src="/images/instagram-1.png" alt="instagram img" />
          <img src="/images/instagram-2.png" alt="instagram img" />
          <img src="/images/instagram-3.png" alt="instagram img" />
          <img src="/images/instagram-4.png" alt="instagram img" />
        </div>
      </div>
      {/* nesletter */}
      <div className="relative">
        <img
          src="/images/news-image.png"
          alt=""
          className="w-full object-cover z-0 max-md:hidden"
        />
        <div className="absolute w-full h-full z-10 top-0 flex flex-col justify-center items-center gap-8 max-md:sticky max-md:px-8 max-md:bg-socials max-md:items-start max-md:py-24">
          <div className="text-center">
            <h2 className="text-5xl font-semibold max-md:text-2xl ">Join Our Newsletter</h2>
            <p className="text-lg max-md:text-sm max-md:text-center">
              Sign up for deals, new products and promotions
            </p>
          </div>
          <div className="flex gap-2 w-4/12 border-b-2 border-gray-300 max-md:w-full">
            <img src="images/icon/email.svg" alt="icone de email" />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent w-full py-3"
            />
            <button className="text-gray-400 text-base">Signup</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Socials;
