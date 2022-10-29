import styles from './Restaurant.module.scss'
import {RestaurantType} from "@types";
type RestaurantProps = RestaurantType

export const Restaurant = ({name, imageUrl, time, minSum, categories, featured}: RestaurantProps) => {

  return (<div className={styles.restaurant}>
    <div className={styles.restaurant_logo}>
      <img className={styles.restaurant_image} src={imageUrl}></img>
      {featured && <div className={styles.restaurant_badge}>FEATURED</div>}
    </div>
    <div className={styles.info}>
      <div className={styles.info_elem1}>
        <div><span>{name}</span></div>
        <div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1.66666L2.5 4.99999V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V4.99999L15 1.66666H5Z" stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.5 5H17.5" stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3333 8.33334C13.3333 9.2174 12.9821 10.0652 12.357 10.6904C11.7319 11.3155 10.8841 11.6667 10 11.6667C9.11595 11.6667 8.2681 11.3155 7.64298 10.6904C7.01786 10.0652 6.66667 9.2174 6.66667 8.33334" stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div className={styles.info_elem2}>
        <div className={styles.icon}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3278_351)">
            <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#C7C8D2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 3V6L8 7" stroke="#C7C8D2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_3278_351">
              <rect width="12" height="12" fill="white"/>
            </clipPath>
          </defs>
        </svg></div>
        <div><span>{time}</span></div>
        <div className={styles.point}></div>
        <div><span>{minSum} min sum</span></div>
      </div>
      <div className={styles.categories}>
        {categories.map(category => <div className={styles.categories_item}>
          <img className={styles.category_image} src={category.imageUrl}/>
          <div>{category.name}</div>
        </div>)}
      </div>
    </div>
  </div>)
}

