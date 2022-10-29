import styles from './Discount.module.scss';
import {DiscountType} from "@types";

type DiscountProps = DiscountType

export const Discount = ({ name, percent, category, imageUrl, color}: DiscountProps) => {
  return (<div className={`${styles.discount} ${color === 'blue' ? styles.firstTmp: styles.secondTmp}`}>
    <div >
      <img className={styles.discount_image} src={imageUrl}/>
    </div>
    <div className={`${styles.discount_info} `}>
      <div className={styles.discount_infoName}>{name}</div>
      <div className={styles.discount_infoDiscountPercent}>{percent}% OFF</div>
      <div className={styles.discount_infoFoodCategory}>{category}</div>
    </div>
  </div>)
}