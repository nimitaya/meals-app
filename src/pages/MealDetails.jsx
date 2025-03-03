import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../utilities/apiFetch.js";

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);
  const mealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  useEffect(() => {
    async function fetchMeal() {
      try {
        const data = await fetchData(mealUrl);
        setMeal(data.meals[0]);
        console.log(data.meals[0]);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchMeal();
  }, [id]);

  return (
    <main data-theme="night" className="container mx-auto p-2">
      <div className="bg-base-200 min-h-screen px-40">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h2 className="text-5xl font-bold mb-4">
              {meal.strMeal}
              <div className="badge badge-error ml-8">{meal.strCategory}</div>
            </h2>

            <div className="card-actions justify-end">
            <div className="badge badge-primary badge-outline">{meal.strArea}</div>
            <div className="badge badge-outline">{meal.strTags}</div>
          </div>

            <h3 className="text-3xl font-bold">Instructions</h3>
            <p className="py-6 flex flex-col">
              {meal.strInstructions &&
                meal.strInstructions
                  .split(".")
                  .filter((instruction) => instruction.trim() !== "")
                  .map((instruction, index) => {
                    return <span key={index}>- {instruction}</span>;
                  })}
            </p>

            <button className="btn btn-secondary">
              <Link to="/meals" className="text-xl">
                Go back
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MealDetails;
