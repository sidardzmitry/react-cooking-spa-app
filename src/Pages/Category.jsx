import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader/Preloader";
import { MealsList } from "../components/MealsList/MealList";

import { useNavigate} from "react-router";



const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return (
    <>
      <button className="btn btn-category" onClick={() => navigate(-1)}>
        Back
      </button>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  );
};

export { Category };
