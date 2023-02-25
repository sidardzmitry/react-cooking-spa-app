//styles
import { CategoryItem } from '../CategoryItem/CategoryItem';
import styles from './CategoryList.module.scss';


const CategoryList = ({catalog = []}) => {

    return(
        <div className={styles.list}>
            {
                catalog.map((el => (
                    <CategoryItem key={el.idCategory} {...el} />
                )))
            }
        </div>
    )
}

export {CategoryList};