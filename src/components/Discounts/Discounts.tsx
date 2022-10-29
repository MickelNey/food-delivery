import styles from './Discounts.module.scss';
import React from "react";
import {Discount} from "./Discount/Discount";
import {useQuery} from "@utils";
import {DiscountType} from "@types";


export const Discounts = () => {
  const discounts = useQuery<DiscountType>('discounts')

  return (<div className={styles.discounts}>
    {discounts.map(discount => <Discount key={discount.name} {...discount} />)}
  </div>)
}