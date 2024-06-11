import React from 'react'
import './items.css';

export const Items = () => {
  return (
    <div className='items'>

      

        <div className='items__category'>

        {/* Filtro Dropdown */}
          <div className='filter__dropdown'>
            <div class='dropdown'>
              <p className='filter__titulo'>CATEGORIAS</p>
              <button className='filter__button'>Sala de Estar <img src='/images/icon/arrow-down.svg' alt='icone dropdown'/></button>
            </div>

            <div class='dropdown'>
              <p className='filter__titulo'>PREÇO</p>
              <button className='filter__button'>Todos os Preços<img src='/images/icon/arrow-down.svg' alt='icone dropdown'/></button>
            </div>
          
          </div>

          {/* organizar */}
          <div className='organzar'>
            
          </div>

        </div>
    </div>
  )
}
