import "./AddToBag.css";

import React, { useState } from "react";
import PocketBase from "pocketbase";
import { Snackbar } from "@mui/material";
const pb = new PocketBase("http://127.0.0.1:8090");

export const AddToBag = ({ produtoID, inBag }) => {
  const [isInBag, setIsInBag] = useState(inBag);
  const [open, setOpen] = useState(false);
  const itemID = produtoID;
  const userID = "qusg17bsgc871rb";
  const collectionName = "users";

  async function addToProductToBag() {
    try {
      const user = await pb.collection(collectionName).getOne(userID);
      let currentList = user.wish;
      // Obtém o documento atual (users)
      if (!Array.isArray(currentList) || currentList.length === 0) {
        currentList = [{ productWishID: [] }, { productBagID: [] }];
      }

      let currentBagList = currentList[1].productBagID || [];

      if (!currentBagList.includes(itemID)) {
        currentBagList = [...currentBagList, itemID];
        setIsInBag(true);
        setOpen(true)
        currentList[1].productBagID = currentBagList;

        await pb.collection(collectionName).update(userID, {
          wish: currentList,
        });
      }
    } catch (error) {}
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      {isInBag ? (
        <button className="btn__bag-blocked" onClick={addToProductToBag}>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            message="Adicionado à sacola"
            onClose={handleClose}
            className="snackbar"
          />
          Adicionado na Sacola
        </button>
      ) : (
        <button className="btn__bag" onClick={addToProductToBag}>
          Adicionar à Sacola
        </button>
      )}
    </>
  );
};

export const AddToBagSmall = () => {
  return (
    <>
      <button className="btn__bag-small">Adicionado na Sacola</button>
    </>
  );
};
