import { AddToBag, ProductLikeButton } from "./buttons";
import StarRating from "./starRating";

function Product({ id, title, price, img, stars, tag, sale, saleValue }) {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer h-full hover:scale-105 duration-500">
      {/* image-holder */}
      <div className="bg-holder w-full h-80 relative p-4 box-border">
        <img
          src={img}
          alt="imagem de fone"
          className="h-full w-full scale-75 object-scale-down "
        />
        {/* Tags */}
        <div className="absolute flex flex-col gap-2 top-4 left-4">
          <p className="bg-white rounded text-base font-bold px-3">{tag}</p>

          {/* Tag Sale */}
          {sale && (
            <p className="px-3 bg-secondary2 rounded text-base font-bold text-white">
              {`-${saleValue}%`}
            </p>
          )}
        </div>

        <AddToBag />
        <ProductLikeButton productID={id} />
      </div>

      {/* info products */}
      <div className="h-24 flex flex-col justify-between gap-1">
        <StarRating stars={stars} className="h-1/4" />
        <h4 className="h-2/4 text-dark font-semibold text-base">{title}</h4>
        {!sale ? (
          <p className="h-1/4 text-dark font-semibold text-sm">
            ${price.toFixed(2)}
          </p>
        ) : (
          <p className="h-1/4 flex text-dark font-semibold text-sm gap-2">
            ${price - (price * (saleValue / 100)).toFixed(2)}
            <span className="text-subtitle  line-through">
              ${price.toFixed(2)}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Product;
