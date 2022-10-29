import React from 'react';
import {Categories, Discounts, Restaurants} from "@components";
import styles from './MainPage.module.scss'
import {Page} from "../Page";

export const MainPage = () => {
  return (
    <>
      <Page>
        <Discounts />
        <Categories />
        <div>Nearby restaurants</div>
        <Restaurants />
        <div className={styles.centerContainer}>
          <button className={styles.button}>Load more</button>
        </div>
      </Page>
    </>
  )
}