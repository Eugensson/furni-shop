"use client";

import Image from "next/image";
import { HiPlus } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { ProductGroup } from "@/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductSliderProps {
  products: ProductGroup[];
}

export const ProductSlider = ({ products }: ProductSliderProps) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation
      pagination={{ clickable: true }}
      className="productSlider min-h-325"
    >
      {products.map((item, index) => (
        <SwiperSlide key={index}>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 lg:gap-7.5">
            {item.productList.map(({ id, image, name, price, oldPrice }) => (
              <li key={id} className="w-full max-w-72.5 h-95 text-left">
                <div className="relative mb-4 w-full max-w-71.25 h-full max-h-73 flex items-center justify-center border border-gray-200 hover:border-accent rounded-2xl transition-colors duration-300 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={`${name} image`}
                    width={170}
                    height={170}
                    className="object-contain object-center aspect-square"
                  />
                  <button
                    type="button"
                    className="absolute bottom-4 right-5.5 size-8 flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-full cursor-pointer"
                  >
                    <HiPlus size={20} className="text-primary" />
                  </button>
                </div>
                <h3 className="mb-2 font-semibold lg:text-lg">{name}</h3>
                <div className="flex items-center gap-x-3">
                  <p>$ {price}</p>
                  <p className="text-[15px] text-grey line-through">
                    $ {oldPrice}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
