import CardItem from "../components/CardItem";

const Meals = () => {
  const mealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=p"

  return (
    <main data-theme="night" className="container mx-auto p-4">
      <CardItem />
    </main>
  );
};
export default Meals;
