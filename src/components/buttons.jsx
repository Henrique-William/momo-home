import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { useState } from "react";

export function ProductLikeButton() {
  const [isliked, setIsLiked] = useState(false);

  function toggleButton() {
    const like = !isliked;
    setIsLiked(like);
  }

  return (
    <button
      className="absolute w-fit top-4 right-4 p-2 bg-white rounded-full shadow-xl hidden group-hover:block hover:scale-75 duration-500"
      onClick={toggleButton}
    >
      {isliked ? <RiHeart3Fill size={20} /> : <RiHeart3Line size={20} />}
    </button>
  );
}

export function AddToBag() {
  return (
    <button className="absolute bottom-4 left-4 right-4 bg-dark text-white py-3 rounded-lg text-base hidden group-hover:block">
      Add to bag
    </button>
  );
}

export function ShopNow({ children }) {
  return (
    <button className="w-fit bg-dark text-white py-2 px-10 rounded-lg text-base">
      {children}
    </button>
  );
}

export function Button({ children }) {
  return (
    <button className="w-full py-3 bg-dark text-white text-base rounded-lg">
      {children}
    </button>
  );
}
