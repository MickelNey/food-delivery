import styles from './Restaurants.module.scss'
import { Restaurant } from "./Restaurant/Restaurant";
import {RestaurantType} from '@types';
import { useQuery } from "@utils";
import React from "react";

export const Restaurants = () => {
  const restaurants = useQuery<RestaurantType>('restaurants')

  return (
    <div className={styles.restaurants}>
      {restaurants.map(restaurant => <Restaurant key={restaurant.name}{...restaurant} />)}
    </div>
  )
}


function List<T>(endpoint: string, style: string, children: React.ReactNode) {
  const list = useQuery<T>(endpoint)

  return <div className={style}>
    {list.map(item => {})}
  </div>
}