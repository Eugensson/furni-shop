import bedImg from "@/public/assets/bed.png";
import chairImg from "@/public/assets/chair.png";
import cupboardImg from "@/public/assets/cupboard.png";
import lightingImg from "@/public/assets/lighting.png";

import { newInStoreItem } from "@/types";

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

export const newInStoreData: newInStoreItem[] = [
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
