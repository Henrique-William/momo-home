import React from 'react';
import { useState, useEffect } from 'react';
import './items.css';
import { listaDeProdutos } from '../listaDeProdutos';

export const Items = () => {

  return (
    <div className='items'>
        <div className='items__category'>

          {/* Filtro Dropdown */}
          <div className='filter__dropdown'>
          <Dropdown title='CATEGORIAS' button='Todos' onFilter={(item) => { /* Handle filter logic here */ }} />
            {/* <Dropdown title='PREÇO' button='Todos os Preços'/>*/}
          </div>

          {/* organizar */}
          <div className='organizar'>
            <button className='btn__organizar'>Ordenar por
              <img 
                src='/images/icon/chevron-down.svg' 
                alt='icone para baixo'
              />
            </button>
            
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

export const Dropdown = ({ title, button, onFilter }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedItem, setSelectedItem] = useState(button);
  const categoriesSet = new Set(listaDeProdutos.map((item) => item.categories));
  const categories = Array.from(categoriesSet);
  console.log(categories);

  const handleToggle = () => {
    setIsChecked(!isChecked); // Toggle dropdown visibility
  };

  const handleItemClick = (item) => {
    setSelectedItem(item); // Update selected category
    setIsChecked(false); // Close dropdown after selection
    onFilter(item); // Call the filter function with the selected category
  };
  

  return (
    <div className='dropdown'>
      <p className='filter__titulo'>{title}</p>
      <label className='dropdown__label'>
        <input type='checkbox' checked={isChecked} className='dropdown__input' onChange={handleToggle} />
        <p className='dropdown__btn'>
          {selectedItem}
          <img src='/images/icon/arrow-down.svg' alt='icone dropdown' />
        </p>

        {isChecked && (
          <ul className='dropdown__list'>
            <a> {/* Wrap in anchor tag for accessibility */}
              <li onClick={() => handleItemClick('Todos')}>Todos</li> {/* Pass 'Todos' as the selected item */}
            </a>
            {categories.map((category) => (
              <a> {/* Wrap in anchor tag for accessibility */}
                <li key={category} onClick={() => handleItemClick(category)}>{category}</li>
              </a>
            ))}
          </ul>
        )}
      </label>
    </div>
  );
};