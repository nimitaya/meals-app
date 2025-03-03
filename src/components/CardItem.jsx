const CardItem = ({ food }) => {
  // const tags = food.strTags.split(",");
  // console.log(tags);

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={food.strMealThumb} alt={food.strMeal} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {food.strMeal}
          <div className="badge badge-secondary">{food.strCategory}</div>
        </h2>
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
