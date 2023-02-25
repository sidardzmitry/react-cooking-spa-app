//styles
import styles from "./MealList.module.scss";
import { MealItem } from "../MealItem/MealItem";

const MealsList = ({meals = []}) => {
  return (
  <div className={styles.list}>
{
    meals.map((meal) => (
        <MealItem key={meal.idMeal} {...meal}/>
    ))
}
  </div>
  );
};

export { MealsList };
