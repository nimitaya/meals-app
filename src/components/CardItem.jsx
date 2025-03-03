import { Link } from "react-router-dom";

const CardItem = ({ food }) => {
  // let tagsString = food.strTags
  // let tagsString.split(",");
  // console.log(tags);

  return (
    <div className="card bg-base-100 w-96 shadow-lg border border-black">
      <figure>
        <img src={food.strMealThumb} alt={food.strMeal} />
      </figure>
      <div className="card-body">
        <Link to={`/meals/${food.idMeal}`}>
          <h2 className="card-title">
            {food.strMeal}
            <div className="badge badge-secondary">{food.strCategory}</div>
          </h2>
        </Link>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{food.strArea}</div>
          <div className="badge badge-outline">{food.strTags}</div>
          {/* {tags ? tags.map((tag) => <div className="badge badge-outline">{tag}</div>) : ""} */}
        </div>
      </div>
    </div>
  );
};
export default CardItem;
