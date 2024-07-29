import React, { useEffect, useState } from "react";
import "./product_list.css";
import { Product } from "../Product";

import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");
const userID = "qusg17bsgc871rb";
const collectionName = "users";

export const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [isOnBag, setIsOnBag] = useState([]);

  async function getProducts() {
    return await pb.collection("produtos").getFullList();
  }

  //useEffect wishlist
  useEffect(() => {
    const fetchUserWishlist = async () => {
      try {
        const user = await pb.collection(collectionName).getOne(userID);
        let currentList = user.wish;

        if (!Array.isArray(currentList) || currentList.length === 0) {
          currentList = [{ productWishID: [] }, { productBagID: [] }];
        }
        
        let currentWishList = currentList[0].productWishID || [];
        let currentBagList = currentList[1].productBagID || [];

        setLikedProducts(currentWishList);
        setIsOnBag(currentBagList);
      } catch (error) {
        console.error("Erro ao acessar o documento:", error);
      }
    };

    fetchUserWishlist();
  }, []);
  

  //useEffect produtos
  useEffect(() => {
    getProducts()
      .then((event) => setProduct(event))
      .catch((event) => console.log(event));
  }, []);

  return (
    <div className="product-list">
      {/* <Items /> */}
      <div className="products">
        {product.map((product) => (
          <Product
            product={product}
            key={product.id}
            id={product.id}
            img={product.img}
            sale={product.sale}
            saleValue={product.saleValue}
            alt={product.alt}
            stars={product.stars}
            title={product.title}
            price={product.price}
            description={product.description}
            likedProducts={likedProducts.includes(product.id) ? true : false}
            isOnBag={isOnBag.includes(product.id) ? true : false}
          />
        ))}
      </div>

      <div className="product__show-btn">
        <button className="show__btn">Mostrar mais</button>
      </div>
    </div>
  );
};
