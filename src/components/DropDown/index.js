import React from 'react';
import './dropdown.css';

export const DropDown = ({ categories, value, onChange }) => {
  return (
    <select className='dropdown' value={value} onChange={onChange}>
      <option value='Todos'>Todos</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};