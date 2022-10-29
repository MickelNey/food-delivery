import React from "react";

import styles from './Categories.module.scss'
import {Category} from "./Categorie/Category";
import { CategoryType} from "@types";
import {useQuery} from "@utils";

export const Categories = () => {
  let categories = useQuery<CategoryType>('categories')

  return (<div className={styles.categories}>
    {categories.map(category => <Category key={category.name}{...category} />)}
  </div>)
}


