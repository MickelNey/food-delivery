import styles from './Category.module.scss'
import { CategoryType } from "@types";

type CategoryProps = CategoryType

export const Category = ({ imageUrl, name, active }: CategoryProps) => {
  return (<div className={styles.category}>
    <img className={styles.category_image} src={imageUrl}/>
    <div>{name}</div>
  </div>)
}