//styles
import styles from "./CategoryItem.module.scss";

import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={strCategoryThumb} alt={strCategory} />
        </div>
        <div className={styles.content}>
          <span className={styles.title}>{strCategory}</span>
          <p className={styles.text}>{strCategoryDescription.slice(0, 40)}...</p>
        </div>
        <div className={styles.action}>
          <Link to={`/category/${strCategory}`} className={styles.btn}>
            Watch categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export { CategoryItem };
