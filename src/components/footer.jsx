function Footer() {
  return (
    <section className="px-40 pt-20 pb-8 bg-dark">
      <div className="flex flex-col gap-14">
        <div className="grid grid-cols-2">
          {/* logo footer */}
          <div className="flex gap-8">
            <img src="images/logo-footer.png" alt="logo Elegant" />
            <img src="images/rectangle.png" alt="" className="h-full" />
            <p className="text-white w-fit text-sm">Headphone Store</p>
          </div>
          {/* menu footer */}
          <div>
            <ul className="flex gap-10 justify-end text-white">
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
        <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-7">
                <p className="text-subtitle font-normal text-sm">Copyright © 2023 3legant. All rights reserved</p>
                <p className="text-white text-xs font-semibold">Privacy Policy</p>
                <p className="text-white text-xs font-semibold">Terms of Use</p>
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
