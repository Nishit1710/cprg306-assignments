import React from 'react';
import { useUserAuth } from "../../_utils/auth-context";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";


export default function Page() {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const user = useUserAuth();

  if (!user) {
    return null;
  }

  const cleanUpItemName = (ingredient) => {
    const cleanedName = ingredient.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]/g, '');
    const trimmedName = cleanedName.trim().replace(/\s*\d+\s*\w*/, '');
  
    return trimmedName;
  };


  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };


  const handleItemSelect = (ingredient) => {
    const cleanedItemName = cleanUpItemName(ingredient);
    setSelectedItemName(cleanedItemName);
  };

  if (!user) {
    return null;
  }

  return (
    <main className="flex flex-row">
      <div className="py-8 px-9">
        <div className= "max-w-sm m-2">
          <div className="text-5xl">
            <h1>Shopping List</h1>
          </div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>
      {selectedItemName && (
        <MealIdeas ingredient={selectedItemName} />
      )}
    </main>
  );
};
