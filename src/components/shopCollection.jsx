import { IoArrowForward } from "react-icons/io5";

const headbandImage = "images/headband.png";
const earbudsImage = "images/earbuds.png";
const accessoriesImage = "images/accessories.png";

function ShopCollection() {
  return (
    <>
      <h1 className="mx-40 text-5xl font-medium max-md:mx-8 max-md:text-4xl max-md:text-center">Shop Collection</h1>

      <section className="h-fit mx-40 mt-12 flex gap-6 max-md:mx-8 max-md:flex-col">
        {/* Headband */}
        <div
          className="h-custom-664 w-1/2 bg-holder bg-no-repeat bg-center relative cursor-pointer max-md:w-full"
          style={{
            backgroundImage: `url(${headbandImage})`,
          }}
        >
          <div className="absolute bottom-12 left-12 flex flex-col gap-3">
            <h2 className="text-4xl font-semibold">Headbands</h2>
            <p className="border-b-2 border-dark w-fit flex items-center gap-1 ">
              Collection <IoArrowForward />
            </p>
          </div>
        </div>
        {/* Earbuds and Accessories */}
        <div className="h-custom-664 w-1/2 flex flex-col gap-6 max-md:w-full">
          {/* Earbuds */}
          <div
            className="relative flex bg-holder h-1/2 bg-no-repeat bg-contain bg-right cursor-pointer max-md:w-full"
            style={{ backgroundImage: `url(${earbudsImage})` }}
          >
            <div className="absolute bottom-12 left-12 flex flex-col gap-3">
              <h2 className="text-4xl font-semibold">Earbuds</h2>
              <p className="border-b-2 border-dark w-fit flex items-center gap-1 ">
                Collection <IoArrowForward />
              </p>
            </div>
          </div>
          {/* Accessories */}
          <div
            className="relative flex bg-holder h-1/2 bg-no-repeat bg-contain bg-right cursor-pointer max-md:w-full"
            style={{ backgroundImage: `url(${accessoriesImage})` }}
          >
            <div className="absolute bottom-12 left-12 flex flex-col gap-3">
              <h2 className="text-4xl font-semibold">Accessories</h2>
              <p className="border-b-2 border-dark w-fit flex items-center gap-1 ">
                Collection <IoArrowForward />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopCollection;
