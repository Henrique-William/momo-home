import { IoStar, IoStarHalf } from "react-icons/io5";

function StarRating({ stars }) {
  const fullStars = Math.floor(stars); // número de estrelas inteiras
  const halfStar = stars % 1 !== 0; // verifica se tem meia estrela
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <IoStar key={index} size={16} color="#343839" />
      ))}
      {halfStar && <IoStarHalf size={16} color="#343839" />}
    </div>
  );
}

export default StarRating;
