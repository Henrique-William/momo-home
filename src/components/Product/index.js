import React from 'react';
import './product.css'

export const Product = (props) => {
    let stars = props.stars;
    const isSaled = props.sale;
    


  return (

    <div className='product'>
      
      <div className='product__img'>
        <img 
          src={props.img} 
          alt={props.alt}
        />

        {/* sale */}
        {isSaled && (
          <div className='product__sale'>
            -{props.saleValue} %
          </div>
        )} 
      </div>
      

      <div className='product__texts'>
        <div className='product__info-p'>
          <StarRating rating={stars} className='product__stars'/>
          <div className='product__title'>
            <h3>{props.title}</h3>
            {isSaled && (            
              <div className='prodcut__price-container'>
                <p className='product__price'>${(props.price * (props.saleValue/100)).toFixed(2)}</p>
                <p className='product__price-dash'>${props.price}</p>
              </div>
                
              )}
              {!isSaled &&(<p className='product__price'>${props.price}</p>)}
            
          </div>
          <p>{props.description}</p>
        </div>

        <div className='product__btns'>
          <button className='btn__bag'>Adicionar à sacola</button>
          <button className='btn__like'> 
            <img 
              src='images/icon/like.svg' alt=''
            />Wishlist
          </button>
        </div>
        
      </div>
    </div>
  )
};

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
