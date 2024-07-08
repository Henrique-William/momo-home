import React from 'react';
import './items.css';
import {DropDown} from '../DropDown'
import { listaDeProdutos } from '../listaDeProdutos';
import { useState } from 'react';

export const Items = () => {
  // tranformando um obj de categorais em array e passando via props
  const uniqueCategories = [...new Set(listaDeProdutos.map((produto) => produto.categories))];
  const [selectedCategory, setSelectedCategory] = useState('Todos'); // Initial selected category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className='items'>
        <div className='items__category'>
        <DropDown categories={uniqueCategories} value={selectedCategory} onChange={handleCategoryChange} />
        <div className='organizar'>
        </div>
          {/* organizar */}
          <div className='organizar'>          
            <div className='organizar__block'>
              <img 
                src='images/icon/Toolbar Selector Buttons.svg' 
                alt='ícone de Layout de pagina 1'
              />
              <img 
                src='images/icon/Toolbar Selector Buttons-1.svg' 
                alt='ícone de Layout de pagina 2'
              />
              <img 
                src='images/icon/Toolbar Selector Buttons-2.svg' 
                alt='ícone de Layout de pagina 3'
              />
              <img 
                src='images/icon/Toolbar Selector Buttons-3.svg' 
                alt='ícone de Layout de pagina 4'
              />
            </div>
          </div>

        </div>
    </div>
  )
};
