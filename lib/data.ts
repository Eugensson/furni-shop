import bedImg from "@/public/assets/bed.png";
import chairImg from "@/public/assets/chair.png";
import cupboardImg from "@/public/assets/cupboard.png";
import lightingImg from "@/public/assets/lighting.png";
import product1Img from "@/public/assets/products/product-1.png";
import product2Img from "@/public/assets/products/product-2.png";
import product3Img from "@/public/assets/products/product-3.png";
import product4Img from "@/public/assets/products/product-4.png";
import product5Img from "@/public/assets/products/product-5.png";
import product6Img from "@/public/assets/products/product-6.png";
import product7Img from "@/public/assets/products/product-7.png";
import product8Img from "@/public/assets/products/product-8.png";
import product9Img from "@/public/assets/products/product-9.png";
import product10Img from "@/public/assets/products/product-10.png";

import { NewInStoreItem, ProductGroup } from "@/types";

export const statsData = [
  {
    id: "1",
    value: "7",
    text: "Year Experience",
  },
  {
    id: "2",
    value: "2",
    text: "Opened in the country",
  },
  {
    id: "3",
    value: "10k+",
    text: "Furniture sold",
  },
  {
    id: "4",
    value: "260+",
    text: "Variant Furniture",
  },
];

export const newInStoreData: NewInStoreItem[] = [
  {
    id: "1",
    name: "chair",
    image: chairImg,
  },
  {
    id: "2",
    name: "bed",
    image: bedImg,
  },
  {
    id: "3",
    name: "cupboard",
    image: cupboardImg,
  },
  {
    id: "4",
    name: "lighting",
    image: lightingImg,
  },
];

export const productData: ProductGroup[] = [
  {
    productList: [
      {
        id: "1",
        image: product1Img,
        name: "Ceiling Light",
        price: 75,
        oldPrice: 82,
      },
      {
        id: "2",
        image: product2Img,
        name: "Wood Chair",
        price: 50,
        oldPrice: 70,
      },
      {
        id: "3",
        image: product3Img,
        name: "Papper Cupboard",
        price: 105,
        oldPrice: 120,
      },
      {
        id: "4",
        image: product4Img,
        name: "Ole Gundorse Spring",
        price: 75,
        oldPrice: 82,
      },
      {
        id: "5",
        image: product5Img,
        name: "Treos Seroes 911",
        price: 200,
        oldPrice: 210,
      },
      {
        id: "6",
        image: product6Img,
        name: "Multi bilderman slibber",
        price: 45,
        oldPrice: 50,
      },
      {
        id: "7",
        image: product7Img,
        name: "XORA corner desk",
        price: 320,
        oldPrice: 325,
      },
      {
        id: "8",
        image: product8Img,
        name: "Black Forest Series Wood",
        price: 225,
        oldPrice: 240,
      },
      {
        id: "9",
        image: product9Img,
        name: "Papper Cupboard",
        price: 105,
        oldPrice: 120,
      },
      {
        id: "10",
        image: product10Img,
        name: "Ole Gundorse Spring",
        price: 75,
        oldPrice: 82,
      },
    ],
  },
  {
    productList: [
      {
        id: "1",
        image: product1Img,
        name: "Ceiling Light",
        price: 75,
        oldPrice: 82,
      },
      {
        id: "2",
        image: product2Img,
        name: "Wood Chair",
        price: 50,
        oldPrice: 70,
      },
      {
        id: "3",
        image: product3Img,
        name: "Papper Cupboard",
        price: 105,
        oldPrice: 120,
      },
      {
        id: "4",
        image: product4Img,
        name: "Ole Gundorse Spring",
        price: 75,
        oldPrice: 82,
      },
      {
        id: "5",
        image: product5Img,
        name: "Treos Seroes 911",
        price: 200,
        oldPrice: 210,
      },
      {
        id: "6",
        image: product6Img,
        name: "Multi bilderman slibber",
        price: 45,
        oldPrice: 50,
      },
      {
        id: "7",
        image: product7Img,
        name: "XORA corner desk",
        price: 320,
        oldPrice: 325,
      },
      {
        id: "8",
        image: product8Img,
        name: "Black Forest Series Wood",
        price: 225,
        oldPrice: 240,
      },
      {
        id: "9",
        image: product9Img,
        name: "Papper Cupboard",
        price: 105,
        oldPrice: 120,
      },
      {
        id: "10",
        image: product10Img,
        name: "Ole Gundorse Spring",
        price: 75,
        oldPrice: 82,
      },
    ],
  },
];
