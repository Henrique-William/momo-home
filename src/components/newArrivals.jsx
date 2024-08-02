import { useState } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

function CarouselProduct() {
  const [isliked, setIsLiked] = useState(false);

  function toggleButton() {
    const like = !isliked;
    setIsLiked(like);
  }

  return (
    <div className="py-12 flex-row">
      <h1 className="mx-40 text-section font-medium">New Arrivals</h1>
      {/* product list */}
      <section className="overflow-hidden ml-40 mt-12">
        {/* product */}
        <div className="w-64 h-fit flex flex-col gap-3 group cursor-pointer">
          <div className="bg-holder w-full h-80 relative">
            <img
              src="/images/products/headphone01.png"
              alt="imagem de fone"
              className="w-full h-full object-cover"
            />

            {/* tag */}
            <p className="absolute px-3 bg-white top-4 left-4 rounded text-base font-bold">
              NEW
            </p>
            {/* Hover container */}

            {/* Add to bag */}
            <button className="absolute bottom-4 left-4 right-4 bg-button text-white py-3 rounded-lg text-base hidden group-hover:block">
              Add to bag
            </button>
            {/* Like */}
            <button
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-xl hidden group-hover:block"
              onClick={toggleButton}
            >
              {isliked ? (
                <RiHeart3Fill width={20} height={20} />
              ) : (
                <RiHeart3Line width={20} height={20} />
              )}
            </button>
          </div>
          <div className="h-24"></div>
        </div>
      </section>
    </div>
  );
}

export default CarouselProduct;
