import React, { useEffect, useState } from "react";
import "./product_list.css";
// import { Items } from '../Items';
import { Product } from "../Product";

import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

async function getProducts() {
  return await pb.collection("produtos").getFullList();
}

export const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts()
      .then((event) => setProduct(event))
      .catch((event) => console.log(event));
  }, []);

  return (
    <div className="product-list">
      {/* <Items /> */}
      <div className="products">
        {product.map((product, index) => (
          <Product
            product={product}
            key={index}
            id={product.id}
            img={product.img}
            sale={product.sale}
            saleValue={product.saleValue}
            alt={product.alt}
            stars={product.stars}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>

      <div className="product__show-btn">
        <button className="show__btn">Mostrar mais</button>
      </div>
    </div>
  );
};
