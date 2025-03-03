import { useParams, Link } from "react-router-dom";

const MealDetails = () => {
  const { id } = useParams();

  return (
    <main data-theme="night" className="container mx-auto p-4">
      <h2>Meal Name of {id}</h2>
      <Link to="/meals" className="btn btn-secondary text-xl">Go back</Link>
    </main>
  );
};
export default MealDetails;
