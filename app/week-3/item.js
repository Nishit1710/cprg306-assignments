import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-blue-500 p-5 mb-5 rounded-md">
      <p className= "font-sans">
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm text-white-500">Quantity: {quantity}</p>
      <p className="text-sm text-white-500">Category: {category}</p>
      <li className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 mb-4 rounded-md"></li>
      </p>
    </li>
  );
};
export default Item;