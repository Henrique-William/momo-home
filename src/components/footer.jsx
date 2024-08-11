function Footer() {
  return (
    <section className="px-40 pt-20 pb-8 bg-dark max-md:px-8 max-md:py-12">
      <div className="flex flex-col gap-14 max-md:gap-10">
        <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-10">
          {/* logo footer */}
          <div className="justify-between max-md:flex max-md:flex-col max-md:gap-10">
            <div className="flex gap-8 max-md:flex-col max-md:items-center">
              <img
                src="images/logo-footer.png"
                alt="logo Elegant"
                className="max-md:w-fit"
              />
              <img
                src="images/rectangle.png"
                alt=""
                className="h-full max-md:hidden"
              />
              <p className="text-white w-fit text-sm">Headphone Store</p>
            </div>
            {/* menu footer */}
          </div>
          <div>
            <ul className="flex gap-10 justify-end text-white max-md:flex-col max-md:gap-8 max-md:items-center">
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/">
                <li>loja</li>
              </a>
              <a href="/">
                <li>Produtos</li>
              </a>
              <a href="/">
                <li>Contato</li>
              </a>
            </ul>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center justify-between py-4 max-md:flex-col-reverse max-md:gap-7">
          <div className="flex items-center gap-7 max-md:flex-col-reverse ">
            <p className="text-subtitle font-normal text-sm">
              Copyright © 2023 3legant. All rights reserved
            </p>
            <div className="flex gap-7 max-md:flex">
              <p className="text-white text-xs font-semibold">Privacy Policy</p>
              <p className="text-white text-xs font-semibold">Terms of Use</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img src="/images/icon/instagram.svg" alt="" />
            <img src="/images/icon/facebook.svg" alt="" />
            <img src="/images/icon/youtube.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
