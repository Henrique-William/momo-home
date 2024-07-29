/* eslint-disable no-undef */
import "./product.css";
import { StarRating } from "../StarRating";
import { WishButton } from "../WishButton";
import { AddToBag } from "../AddToBag";

import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export const Product = (props) => {
  const stars = props.stars;
  const isSaled = props.sale;
  
  return (
    <div className="product">
      <div className="product__img">
        <img src={pb.files.getUrl(props.product, props.img)} alt={props.alt} />
        {/* sale */}
        {isSaled && <div className="product__sale">-{props.saleValue} %</div>}
      </div>

      {/* description product */}
      <div className="product__texts">
        <div className="product__info-p">
          <StarRating rating={stars} className="product__stars" />
          <div className="product__title">
            <h3>{props.title}</h3>
            {isSaled && (
              <div className="product__price-container">
                <p className="product__price">
                  ${(props.price * (props.saleValue / 100)).toFixed(2)}
                </p>
                <p className="product__price-dash">${props.price}</p>
              </div>
            )}
            {!isSaled && <p className="product__price">${props.price}</p>}
          </div>
          <p>{props.description}</p>
        </div>

        {/* product buttons */}
        <div className="product__btns">
          <AddToBag produtoID={props.id} inBag={props.isOnBag} />
          <WishButton produtoID={props.id} likeStatus={props.likedProducts}>
            Wishlist
          </WishButton>
        </div>
      </div>
    </div>
  );
};
