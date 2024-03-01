'use client';
import React, { useState } from 'react';
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
  setItems( [...items, newItem]);
};
  return (
    <main>
      <div className= "flex justify-center">
      <div className="py-8">
      <div className="text-5xl">
      <h1>Shopping List</h1>
      </div></div></div>
      <NewItem onAddItem={handleAddItem} className="" />
      <ItemList items={items} />
    </main>
          
  );
};