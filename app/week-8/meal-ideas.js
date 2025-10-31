"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) {
    return [];
  }
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    if (!response.ok) {
      throw new Error(
        `HTTP Error! status ${response.status}`
      );
    }
    const data = await response.json();
    return data.meals || [];
  }
  catch (error) {
    console.log(error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const mealLoadResults = await fetchMealIdeas(ingredient);
    setMeals(mealLoadResults);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <header>
        <h1>Meal ideas</h1>
      </header>
      <ul>
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))
        ) : (
          <p className="text-5xl text-center">Loading...</p>
        )}
      </ul>
    </div>
  );

}

