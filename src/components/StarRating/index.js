import "./starRating.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // número de estrelas inteiras
  const halfStar = rating % 1 !== 0; // verifica se tem meia estrela

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} color="black"/>
      ))}
      {halfStar && <FaStarHalfAlt color="black"/>}
    </div>
  );
};
