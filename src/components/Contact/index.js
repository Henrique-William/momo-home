import React from 'react';
import './contact.css'

export const Contact = () => {
  return (
    <div className='login'>
      <div className='login__text'>
        <h2 className='login__title'>Faça Login</h2>
        <p className='login__subtitle'>logue para ficar por dentro de produtos, recomendações e promoções</p>
      </div>
      <div className='login__email'>
        <img 
          src='images/icon/email.svg'
          alt='icone de email'
        />
        <input type='email' placeholder='Endereço de Email'/>
        <button className='login__btn'>SignIn</button>
      </div>
      
    </div>
  )
}
