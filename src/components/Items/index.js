import React from 'react'
import './items.css';

export const Items = () => {
  return (
    <div className='items'>
        <div className='items__category'>

          {/* Filtro Dropdown */}
          <div className='filter__dropdown'>
            <div className='dropdown'>
              <p className='filter__titulo'>CATEGORIAS</p>
              <button className='filter__button'>Sala de Estar <img src='/images/icon/arrow-down.svg' alt='icone dropdown'/></button>
            </div>

            <div className='dropdown'>
              <p className='filter__titulo'>PREÇO</p>
              <button className='filter__button'>Todos os Preços<img src='/images/icon/arrow-down.svg' alt='icone dropdown'/></button>
            </div>
          
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
}
