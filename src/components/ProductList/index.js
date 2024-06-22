import React from 'react';
import './product_list.css';
import { Items } from '../Items';
import { Product } from '../Product';

export const ProductList = () => {

  //array de produtos

  const listaDeProdutos = [
    {
      img: '/images/products/pillow.png',
      alt: 'Imagem de uma almofada',
      stars: 3,
      sale: true,
      saleValue: 50,
      title: 'Almofada Off-White',
      price: 7.99,
      description: 'Capa de almofada supermacia em cor off-white com padrão tátil que realça os diferentes tons do pelo e da base.'
    },
    {
      img: '/images/products/table-lamp.png',
      alt: 'Imagem de uma lâmpada de mesa',
      stars: 4,
      title: 'Lâmpada de mesa',
      price: 39.99,
      description: 'Como pequenas joias em latão brilhante e vidro transparente cinza, emite uma luz ambiente suave que cria sombras emocionantes nas paredes e tetos.'
    },
    {
      img: '/images/products/white-drawer.png',
      alt: 'Imagem de Gaveta branca',
      stars: 5,
      title: 'Gaveta Branca (unid.)',
      price: 89.99,
      description: 'Capa de almofada supermacia em cor off-white com padrão tátil que realça os diferentes tons do pelo e da base.'
    },
    {
      img: '/images/products/cozy-sofa.png',
      alt: 'Imagem de um sofá',
      stars: 4,
      title: 'Sofá aconchegante',
      price: 299.00,
      description: 'Fácil transporte foi o objetivo quando criamos este sofá confortável com tecido de poliéster bege durável.'
    },
    {
      img: '/images/products/bamboo-basket.png',
      alt: 'Imagem de uma cesta de bambu',
      stars: 5,
      title: 'Cesta de Bambu',
      price: 9.99,
      description: 'Com a sua forma e cor suaves, este cesto espaçoso é igualmente decorativo onde quer que o coloque.'
    },
    {
      img: '/images/products/black-tray-table.png',
      alt: 'Imagem de uma mesa de metal',
      stars: 4,
      title: 'Mesa de bandeja Preta',
      price: 19.19,
      description: 'Fácil de amar a um preço difícil de resistir. Compre um ou alguns e torne cada espaço onde você se senta mais conveniente.'
    }
  ];

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
