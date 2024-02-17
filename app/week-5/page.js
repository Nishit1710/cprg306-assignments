import React from 'react';
import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main>
      <div className= "flex justify-center">
      <div className="py-8">
      <div className="text-5xl">
      <h1>Shopping List</h1>
      </div></div></div>
      <ItemList />
    </main>
  );
};