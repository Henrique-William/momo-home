import React from 'react';
import './product_list.css';
import { Items } from '../Items';
import { Product } from '../Product';
import { listaDeProdutos } from '../listaDeProdutos';   //array de produtos

export const ProductList = () => {
  return (
    <div className='product-list'>
        <Items />
        <div className='products'>

          {listaDeProdutos.map((product, index) => (
            <Product 
              key={index}
              img={product.img}
              sale={product.sale}
              saleValue={product.saleValue}
              alt={product.alt}
              stars={product.stars}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}

        </div>
      
        <div className='product__show-btn'>
          <button className='show__btn'>Mostrar mais</button>
        </div>
        
    </div>
  )
}
