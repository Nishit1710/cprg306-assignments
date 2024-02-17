import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-blue-500 p-5 mb-5 rounded-md">
      <div className="font-sans">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-sm text-white-500">Quantity: {quantity}</p>
        <p className="text-sm text-white-500">Category: {category}</p>
      </div>
    </li>
  );
};

export default Item;
