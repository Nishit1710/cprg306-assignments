'use client';
import { useState } from "react";

const NewItem = ({onAddItem}) => {
    const [name, setName]= useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory]= useState('produce');
    const handleSubmit = (e) => {
        e.preventDefault();
    

        const id= Math.random().toString(36).substring(2,9);

        const newItem = {
          id,
          name,
          quantity,
          category,
        };

        onAddItem(newItem);

        setName('');
        setQuantity(1);
        setCategory('produce');
    };
    return (
      <main>
        <form onSubmit={handleSubmit} className="max-w-80 mx-auto ml-8">
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-blue-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 p-1 border rounded-md w-full"
            />
          </div>
    
          
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-blue-800">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
              className="mt-2 p-1 border rounded-md w-half"
            />
          </div>
    
          
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-blue-800">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 p-1 border rounded-md w-half"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen food">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
              
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white mt-2 px-4 py-2 mb-8 rounded-md">
            Add Item
          </button>
        </form>
      </main>  
    );
};   
export default NewItem;