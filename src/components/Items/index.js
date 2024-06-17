import React from 'react';
import { useState, useEffect } from 'react';
import './items.css';

export const Items = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const allItems = [
    { name: 'Item 1', category: 'Cozinha' },
    { name: 'Item 2', category: 'Quarto' },
    { name: 'Item 3', category: 'Cozinha' },
    { name: 'Item 4', category: 'Escritório' },
  ];

  useEffect(() => {
    // Inicializa com todos os itens
    setFilteredItems(allItems);
  }, []);

  const handleFilter = (category) => {
    if (category === 'Todos') {
      setFilteredItems(allItems);
    } else {
      const filtered = allItems.filter(item => item.category === category);
      setFilteredItems(filtered);
    }
  };

  return (
    <div className='items'>
        <div className='items__category'>

          {/* Filtro Dropdown */}
          <div className='filter__dropdown'>
            <Dropdown title='CATEGORIAS' button='Todos' onFilter={handleFilter}/>
            {/* <Dropdown title='PREÇO' button='Todos os Preços'/>           */}
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

export const Dropdown = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedItem, setSelectedItem] = useState(props.button);

  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
  };

  const handleItemClick = (item) => {
    console.log(item);
    setSelectedItem(item);
    setIsChecked(false); // Fechar o dropdown após selecionar um item
    props.onFilter(item); // Chamar a função de filtro passada via props
  };

  return (
    <div className='dropdown'>
      <p className='filter__titulo'>{props.title}</p>
      <label className='dropdown__label'>
        <input type='checkbox' checked={isChecked} className='dropdown__input' onChange={handleToggle}/>
        <p className='dropdown__btn'>
          {selectedItem}
          <img 
              src='/images/icon/arrow-down.svg' 
              alt='icone dropdown'
          />
        </p>

        {isChecked && (
          <ul className='dropdown__list'>
            <a onClick={() => handleItemClick('Todos')}><li>Todos</li></a>
            <a onClick={() => handleItemClick('Cozinha')}><li>Cozinha</li></a>
            <a onClick={() => handleItemClick('Quarto')}><li>Quarto</li></a>
            <a onClick={() => handleItemClick('Escritório')}><li>Escritório</li></a>
            <a onClick={() => handleItemClick('Banheiro')}><li>Banheiro</li></a>
          </ul>
        )}
        
      </label>
    </div>
  );
};
