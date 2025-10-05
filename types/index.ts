import { StaticImageData } from "next/image";

export type NewInStoreItem = {
  id: string;
  name: string;
  image: StaticImageData;
};

export type Product = {
  id: string;
  image: StaticImageData;
  name: string;
  price: number;
  oldPrice: number;
};

export type ProductGroup = {
  productList: Product[];
};
