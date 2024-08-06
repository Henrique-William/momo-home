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
      className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-xl hidden group-hover:block"
      onClick={toggleButton}
    >
      {isliked ? (
        <RiHeart3Fill width={20} height={20} />
      ) : (
        <RiHeart3Line width={20} height={20} />
      )}
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
