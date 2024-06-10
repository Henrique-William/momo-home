import React, { useState } from 'react';
import './header.css';

export const Header = () => {

    const [showCoupon, setShowCoupon] = useState(true);

    const handleCloseCoupon = () => {
        setShowCoupon(false);
    };
    return (
    <div>
      {/* Cupom */}
        {showCoupon && (
        <div className='cupom'>
          <img
            src='/images/icon/ticket-percent.svg'
            alt='Ícone de cupom'
          />

          <p>30% de desconto — Tempo Limitado!</p>

          <div className='cupom__link'>
            <a href='/' className='cupum__link-texto'>Compre Agora</a>
            <img
              src='/images/icon/arrow-right.svg'
              alt='icone de seta'
            />
          </div>
          
          <div className='x' onClick={handleCloseCoupon}>
            <img
              src='/images/icon/x.svg'
              alt='icone de x'
            />
          </div>
        </div>
      )}
      {/* menu */}
        <div className='menu'>
            <img
                className='menu__logo'
                src='/images/logo.png'
                alt='Logo'
            />
            
            <ul className='menu__links'>
                <a href="/"><li className='menu__link select'>Home</li></a>
                <a href='/'><li className='menu__link'>loja</li></a>
                <a href='/'><li className='menu__link'>Produtos</li></a>
                <a href='/'><li className='menu__link'>Contato</li></a>
            </ul>

            <div className='menu__icons'>
                <a href='/'><img src='/images/icon/search.svg' alt='Pesquisar'/></a>
                <a href='/'><img src='/images/icon/user-circle.svg' alt='perfil'/></a>
                <a href='/'><img src='/images/icon/shopping-bag.svg' alt='sacola'/></a>
            </div>
        </div>

        {/* Header */}

        <div className='header'>
          <img
            src='/images/Image-header.png'
            alt='header Sala'
            className='header__image'
          />
          <div className='header__texto'>
            <p className='header__texto-link'>
              Home 
              <img 
                src='/images/icon/chevron-right.svg'
                alt='icone de seta'
              /> 
              <p className='header__texto-negrito'>Loja</p>
            
            </p>
            <p className='header__texto-titulo'>Página da loja</p>
            <p className='header__texto-subtitulo'>Vamos projetar o lugar que você sempre imaginou.</p>
          </div>
        </div>
    </div>
    )
}
