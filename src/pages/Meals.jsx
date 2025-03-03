import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import { fetchData } from "../utilities/apiFetch";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  const mealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=p";

  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await fetchData(mealsUrl);
        // console.log(data.meals);
        setMeals(data.meals);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchMeals();
  }, []);

  return (
    <main
      data-theme="night"
      className="container mx-auto p-4 flex flex-wrap justify-center gap-8"
    >
      {meals.length > 0 ? (
        meals.map((food) => <CardItem key={food.idMeal} food={food} />)
      ) : (
        <p>No meals available right now.</p>
      )}
    </main>
  );
};
export default Meals;
