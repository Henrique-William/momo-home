import "./wishlist.css";

import React from "react";
import { AddToBagSmall } from "../AddToBag";

import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export const WishList = (props) => {
  return (
    <div className="table__items">
      <div className="table__product">
        <button>
          <img src="/images/icon/close.svg" alt="icone de fechar" />
        </button>
        <img
          src={pb.files.getUrl(props.product, props.img)}
          alt={props.alt}
          width={60}
          height={70}
        />
        <div>
          <h3>{props.title}</h3>
          <p>Color: Black</p>
        </div>
      </div>

      <div className="table__price">${props.price}</div>
      <AddToBagSmall>Add To bag</AddToBagSmall>
    </div>
  );
};
