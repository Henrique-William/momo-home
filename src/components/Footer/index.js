import React from 'react';
import './footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <div className='footer__logo'>
                <img 
                    src='images/footer-logo.png'
                    alt='icone de logo no footer'
                />
                <img 
                    src='images/footer-separator.png'
                    alt='separador do logo para o slogan'
                />
                <p className='footer__slogan'>Loja de Presentes & Decoração</p>
            </div>   

            <div className='footer__menu'>
                <ul className='footer__menu-links'>
                    <li><a href='/' className='footer__menu-link'>Home</a></li>
                    <li><a href='/' className='footer__menu-link'>loja</a></li>
                    <li><a href='/' className='footer__menu-link'>Produtos</a></li>
                    <li><a href='/' className='footer__menu-link'>Contato</a></li>
                </ul>
            </div>
        </div>
        {/* Footer direitos */}
        <div className='footer__rights'>
            <div className='footer__copyrights'>
                <p className='footer__copyrights-text'>Copyright © 2023 3legant. All rights reserved</p>
                <p>Politicas de Privacidade</p>
                <p>Termos de Uso</p>
            </div>
            <div className='footer_socials'>
                <a href='/' target='new'><img src='images/icon/instagram.svg' alt='icone do Instagram'/></a>
                <a href='/' target='new'><img src='images/icon/facebook.svg' alt='icone do Facebook'/></a>
                <a href='/' target='new'><img src='images/icon/youtube.svg' alt='icone do YouTube'/></a>
            </div>
        </div>
        
    </div>
  )
};
