import "./account.css";
import React from "react";
import { WishListAccount } from "../../components/WishListAccount";

export const Account = () => {
  return (
    <>
      <h1>My Account</h1>

      <section className="account">
        <div className="account__container">
        
          <div className="account__img">
            <div className="account__img-holder">
              <img src="/images/profilepic.png" alt="Foto de perfil" />

              <div className="account__img-icon">
                <img src="/images/icon/camera.svg" alt="icone de camera" />
              </div>
            </div>
            <h2>Sofia Havertz</h2>
          </div>

          <div className="account__settings">
            <ul>
              <li className="selected">Account</li>
              <li>Address</li>
              <li>Orders</li>
              <li>WishList</li>
              <li>Log Out</li>
            </ul>
          </div>

        </div>
        <div className="account__holder">
          <WishListAccount/>
        </div>

      </section>
    </>
  );
};
