import React, { useState } from "react";
import "./like.css";

import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export const WishButton = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const itemID = props.produtoID;
  const [user, setUser] = useState([]);
  const userLogado = 'qusg17bsgc871rb';

  async function getUsers() {
    const recordedUser = await pb.collection("users").getOne(userLogado);
    const recordedWish = recordedUser.wish;
    return recordedWish;
  }

  const toggleWish = async () => {
    const wishStatus = !isLiked;
    
    setIsLiked(wishStatus);
    console.log(wishStatus ? "Entrou o produto" : "Saiu o Produto", itemID);
    // busca o user wish do banco de dados
    try {
      const userList = await getUsers();
      setUser(userList);
      console.log({ user }); // Log the fetched user data
    } catch (error) {
      console.error("Error fetching user:", error);
    }

    if (wishStatus === true){
      pb.collection("users").update(userLogado, {
        wish: { productWishID: [...user, itemID] },
      });
    } else {
      pb.collection("users").update(userLogado, {
        wish: { productWishID: "" },
      });
    }
  };
  
  return (
    <button className="likebtn" onClick={toggleWish}>
      {isLiked ? (
        <img src="images/icon/like_full.svg" alt="" />
      ) : (
        <img src="images/icon/like.svg" alt="" />
      )}
      <p className="textbtn">{props.children}</p>
    </button>
  );
};
