// import "./header.css";
import Cupom from "./cupom";
import Menu from "./menu";

function Header() {
  return (
    <>
      {/* Header */}
      
      <div className="h-screen">
        <div className="absolute w-full object-cover top-0">
          <Cupom />
          <Menu />
        </div>
        
        <img
          src="/images/image-header.png"
          alt="header img"
          className="h-full w-full object-cover z-0"
        />

        {/* Menu */}

        <div className="w-2/4 absolute flex-row top-1/4 left-2/4 ">
          <h1 className="text-8xl font-medium text-left my-2 pb-10">
            Listen to <br />
            the <b className="text-blue-500 font-medium">amazing</b>
            <br />
            music sound.
            <p className="text-lg font-normal">
              Experience music like never before
            </p>
          </h1>

          <p
            className="py-3 px-14 w-fit bg-button text-white rounded-md cursor-pointer"
            id="button"
          >
            Shopping Now
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
