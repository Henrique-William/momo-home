import Cupom from "./cupom";
import Menu from "./menu";

function Header() {
  return (
    <section className="h-screen w-screen max-w-full flex flex-col justify-between bg-gradient-to-b from-gradient1 to-gradient2 overflow-x-hidden">
      {/* Header */}
      <div className="h-1/6">
        <Cupom />
        <Menu />
      </div>
      <div className="flex h-5/6 w-full max-md:hidden">
        <img
          src="images/people-header.png"
          alt=""
          className="w-2/4 object-contain h-full"
        />

        <div className="w-2/4 h-full flex flex-col justify-center ">
          <h1 className="text-8xl font-medium text-left my-2 pb-10">
            Listen to <br />
            the <b className="text-blue-500 font-medium">amazing</b>
            <br />
            music sound.
            <p className="text-xl font-normal">
              Experience music like never before
            </p>
          </h1>

          <p
            className="py-3 px-14 w-fit bg-dark text-white rounded-md cursor-pointer"
            id="button"
          >
            Shopping Now
          </p>
        </div>
      </div>
      {/* mobile */}
      <div className="flex flex-col w-full h-5/6 justify-end items-center px-8 md:hidden">
        <div className="h-2/4 flex flex-col gap-4 items-center text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-medium">
              Listen to <br /> the{" "}
              <b className="text-blue-500 font-medium">amazing</b> music sound.
            </h1>
            <p className="text-base font-normal">
              Experience music like never before
            </p>
          </div>

          <button
            className="py-3 px-14 w-fit bg-dark text-white font-normal rounded-md cursor-pointer"
            id="button"
          >
            Shopping Now
          </button>
        </div>
        <img
          src="images/people-header.png"
          alt=""
          className="flex justify-center object-contain h-4/6"
        />
      </div>
    </section>
  );
}

export default Header;
