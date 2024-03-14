import React from 'react';

const Item = ({ id, name, quantity, category, onSelect }) => {
  return (
    <div className="flex flex-col">
      <li
        className="mb-4 p-4 border bg-cyan-500 w-full hover:bg-orange-500 rounded-md"
        onClick={() => onSelect(name)}
        
        style={{ cursor: 'pointer' }}
      >
        <p className="font-serif text-lg font-bold">{name}</p>
        <p className="text-sm text-white-500">Quantity: {quantity}</p>
        <p className="text-sm text-white-500">Category: {category}</p>
      </li>
    </div>
  );
};

export default Item;