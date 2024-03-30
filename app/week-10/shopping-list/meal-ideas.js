import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [mealIdeas, setMealIdeas] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals;
    };

    const loadMealIdeas = async () => {
        if (ingredient !== "") {
            const ideas = await fetchMealIdeas(ingredient);
            setMealIdeas(ideas);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h1 className="text-4xl font-semibold m-4">Meal Ideas</h1>
            {mealIdeas && (
                <ul className="text-xl font-medium text-black">
                    {mealIdeas.map((idea) => (
                        <li
                            key={idea.idMeal}
                            className="bg-white w-96 hover:bg-blue-400 p-2 border mb-2">
                            <p>{idea.strMeal}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
