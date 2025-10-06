import { IconType } from "react-icons";
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

export type Testimonial = {
  id: string;
  avatar: StaticImageData;
  name: string;
  occupation: string;
  message: string;
};

export type Social = {
  id: string;
  label: string;
  href: string;
  icon: IconType;
};
