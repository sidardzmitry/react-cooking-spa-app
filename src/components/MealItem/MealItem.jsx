//styles
import styles from "./MealItem.module.scss";
import { Link } from "react-router-dom";


const MealItem = (props) => {
  const {strMeal, strMealThumb, idMeal} = props;

  return(
    <div className={styles.item}>
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className={styles.content}>
      <span className={styles.title}>{strMeal.slice(0, 15)}...</span>
      </div>
      <div className={styles.action}>
        <Link to={`/meal/${idMeal}`} className={styles.btn}>Watch recipe</Link>
      </div>
    </div>
  </div>
  )
};

export { MealItem };
