import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    
      <div className="flex flex-col">
        <li className= "bg-cyan-500 shadow-lg p-5 mb-10 rounded-md">
        <p className="font-serif text-lg font-bold">{name}</p>
        <p className="text-sm text-white-500">Quantity: {quantity}</p>
        <p className="text-sm text-white-500">Category: {category}</p>
        </li>
      </div>
    
  );
};

export default Item;
