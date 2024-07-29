import React, { useState } from "react";
import "./like.css";
import { Snackbar } from "@mui/material";
import { TbHeart, TbHeartFilled } from "react-icons/tb";

import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export const WishButton = (props) => {
  const [isLiked, setIsLiked] = useState(props.likeStatus);
  const [open, setOpen] = useState(false);
  const itemID = props.produtoID;
  const userID = "qusg17bsgc871rb";
  const collectionName = "users";

  async function updateWishList() {
    const wishStatus = !isLiked;
    setIsLiked(wishStatus);
    setOpen(true);

    try {
      // Obtém o documento atual (users)
      const user = await pb.collection(collectionName).getOne(userID);
      let currentList = user.wish;

      if (!Array.isArray(currentList) || currentList.length === 0) {
        currentList = [{ productWishID: [] }, { productBagID: [] }];
      }

      let currentWishList = currentList[0].productWishID || [];

      if (wishStatus === true) {
        // Adiciona o item ao array se não estiver presente
        if (!currentWishList.includes(itemID)) {
          currentWishList = [...currentWishList, itemID];
        }
      } else {
        // Remove o item do array se estiver presente
        currentWishList = currentWishList.filter((id) => id !== itemID);
      }

      currentList[0].productWishID = currentWishList;
      // atualiza a lista de desejo após ser executado as condições acima
      await pb.collection(collectionName).update(userID, {
        wish: currentList,
      });
    } catch (error) {
      console.error("Erro ao atualizar o documento:", error);
    }
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <button className="likebtn" onClick={updateWishList}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        message={
          isLiked
            ? "Adicionado à lista de desejos"
            : "Removido da lista de desejos"
        }
        onClose={handleClose}
        className="snackbar"
      />
      {isLiked ? <TbHeartFilled color="red" /> : <TbHeart />}
      <p className="textbtn">{props.children}</p>
    </button>
  );
};
