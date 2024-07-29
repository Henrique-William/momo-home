import "./WishListAccount.css";
import React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import PocketBase from "pocketbase";
import { WishList } from "../WishList";
const pb = new PocketBase("http://127.0.0.1:8090");
const userID = "qusg17bsgc871rb";
const collectionName = "users";

async function getProducts() {
  return await pb.collection("produtos").getFullList();
}

export const WishListAccount = () => {
  const [product, setProduct] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

   //useEffect produtos
   useEffect(() => {
    getProducts()
      .then((event) => setProduct(event))
      .catch((event) => console.log(event));
  }, []);

  //useEffect wishlist
  useEffect(() => {
    const fetchUserWishlist = async () => {
      try {
        const user = await pb.collection(collectionName).getOne(userID);
        const currentWishList = user.wish?.productWishID || [];
        setLikedProducts(currentWishList);
      } catch (error) {
        console.error("Erro ao acessar o documento:", error);
      }
    };

    fetchUserWishlist();
  }, []);

  //useEffect to filter and sort products based on likedProducts
  useEffect(() => {
    if (product.length && likedProducts.length) {
      const filtered = product.filter((prod) => likedProducts.includes(prod.id));
      const sorted = filtered.sort((a, b) => likedProducts.indexOf(a.id) - likedProducts.indexOf(b.id));
      setFilteredProducts(sorted);
    }
  }, [product, likedProducts]);

  return (
    <section className="wishlist">
      <h2>Your Wishlist</h2>
      <div className="table">
        <Box sx={{ height: 400, width: "100%" }}>
          <div className="table__title">
            <p>Products</p>
            <p>Price</p>
            <p>Action</p>
          </div>

          {filteredProducts.map((product) => (
            <WishList
              product={product}
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
            />
          ))}
        </Box>
      </div>
    </section>
  );
};