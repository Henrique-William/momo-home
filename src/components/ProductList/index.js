import React from 'react';
import './product_list.css';
import { Items } from '../Items';
import { Product } from '../Product';

export const ProductList = () => {
  return (
    <div className='product-list'>
        <Items />
        <div className='products'>
          <Product 
            img='/images/products/pillow.png'
            alt='Imagem de uma almofada'
            stars={3}
            title='Almofada Off-White'
            price={7.99}
            description='Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.'
          />

          <Product 
            img='/images/products/table-lamp.png'
            alt='Imagem de uma lâmpada de mesa'
            stars={4}
            title='Lâmpada de mesa'
            price={39.99}
            description='Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings.'
          />
          
        </div>
        <div className='product__show-btn'>
          <button className='show__btn'>Mostrar mais</button>
        </div>
        
    </div>
  )
}
