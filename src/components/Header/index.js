import React, { useState } from 'react';
import './header.css';

export const Header = () => {

    const [showCoupon, setShowCoupon] = useState(true);

    const handleCloseCoupon = () => {
        setShowCoupon(false);
    };
    return (
    <div>
        {showCoupon && (
        <div className='cupom'>
          <img
            src='/images/icon/ticket-percent.svg'
            alt='Ícone de cupom'
          />
          30% off storewide — Limited time!
          <div className='x' onClick={handleCloseCoupon}>
            <img
              src='/images/icon/x.svg'
              alt='icone de x'
            />
          </div>
        </div>
      )}

        <div className='menu'>
            <img
                className='menu__logo'
                src='/images/Logo.png'
                alt='Logo'
            />
            
            <ul className='menu__links'>
                <a href="/"><li className='menu__link select'>Home</li></a>
                <a href='/'><li className='menu__link'>Comprar</li></a>
                <a href='/'><li className='menu__link'>Produtos</li></a>
                <a href='/'><li className='menu__link'>Contato</li></a>
            </ul>

            <div className='menu__icons'>
                <a href='/'><img src='/images/icon/search.svg' alt='Pesquisar'/></a>
                <a href='/'><img src='/images/icon/user-circle.svg' alt='perfil'/></a>
                <a href='/'><img src='/images/icon/shopping-bag.svg' alt='sacola'/></a>
            </div>
        </div>
    </div>
    )
}
