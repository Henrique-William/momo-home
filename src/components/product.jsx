import { AddToBag, ProductLikeButton } from "./buttons";
import StarRating from "./starRating";

function Product({ key, title, price, img, stars, tag }) {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      {/* image-holder */}
      <div className="bg-holder w-full h-80 relative p-4 box-border">
        <img
          src={img}
          alt="imagem de fone"
          className="w-full h-full object-contain" // Ajuste aqui
        />
        {/* tag */}
        <p className="absolute px-3 bg-white top-4 left-4 rounded text-base font-bold">
          {tag}
        </p>
        <AddToBag />
        <ProductLikeButton productID={key} />
      </div>
      {/* info products */}
      <div className="h-24 flex flex-col gap-1">
        <StarRating stars={stars} />
        <h4 className="text-dark font-semibold text-base">{title}</h4>
        <p className="text-dark font-semibold text-sm">${price}</p>
      </div>
    </div>
  );
}

export default Product;
