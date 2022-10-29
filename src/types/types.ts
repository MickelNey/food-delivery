export type CategoryType = {
  name: string;
  imageUrl: string;
  active: boolean
}

export type RestaurantType = {
  name: string,
  imageUrl: string,
  time: string,
  minSum: string,
  featured: boolean,
  categories: CategoryType[];
}

export type DiscountType = {
  name: string;
  imageUrl: string;
  color: string;
  percent: number;
  category: string;
}
