"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { newInStoreItem } from "@/types";

import "swiper/css";
import "swiper/css/pagination";

interface NewItemsSliderProps {
  items: newInStoreItem[];
}

export const NewItemsSlider = ({ items }: NewItemsSliderProps) => {
  return (
    <Swiper
      grabCursor
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 18 },
        768: { slidesPerView: 3, spaceBetween: 20 },
      }}
    >
      {items.map(({ id, image, name }) => (
        <SwiperSlide key={id} className="max-w-66.25">
          <div className="relative">
            <Image
              src={image.src}
              alt={name}
              width={image.width}
              height={image.height}
            />
            <p className="absolute bottom-5 w-full text-center text-lg lg:text-2xl text-white font-medium capitalize">
              {name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
