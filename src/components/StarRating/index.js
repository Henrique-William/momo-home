import './starRating.css'

export const StarRating = ({rating}) => {

    const fullStars = Math.floor(rating);  // número de estrelas inteiras
    const halfStar = rating % 1 !== 0;     // verifica se tem meia estrela
  
    return (
      <div className="star-rating">
        {[...Array(fullStars)].map((_, index) => (
          <img key={index} src="/images/icon/star-icon.svg" alt="full star" />
        ))}
        {halfStar && <img src="/images/icon/half-star-icon.svg" alt="half star" />}
      </div>
    );
  };