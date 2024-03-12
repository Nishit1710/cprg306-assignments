import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  
  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
  };

  const loadMealIdeas = async () => {
    const ideas = await fetchMealIdeas(ingredient);
    setMeals(ideas);
  };
    
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-black-800 mb-4">Meal Ideas for {ingredient}:</h1>
      <ul className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 gap-10">
        {meals && meals.map((meal) => (
          <li key={meal.idMeal} className="bg-lime-500 rounded-md p-4 shadow-md">
            <p className="text-xl font-medium text-black">{meal.strMeal}</p>
          </li>
        ))}
      </ul>
  
      {!meals?.length && <p>No meal ideas found for {ingredient}</p>}
    </div>
  );
};

export default MealIdeas;
