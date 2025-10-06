"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { Testimonial } from "@/types";

import "swiper/css";
import "swiper/css/navigation";

interface TestimonialSliderProps {
  items: Testimonial[];
}

export const TestimonialSlider = ({ items }: TestimonialSliderProps) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      navigation
      autoplay={{ delay: 8000 }}
      className="testimonialSlider"
    >
      {items.map(({ id, avatar, name, occupation, message }) => (
        <SwiperSlide key={id}>
          <div className="flex flex-col min-h-62.5 lg:min-h-75">
            <div className="mb-9 flex items-center gap-x-5">
              <Image
                src={avatar}
                alt={`${name} image`}
                width={80}
                height={80}
                className="object-cover aspect-square rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-500">{occupation}</p>
              </div>
            </div>
            <p className="md:text-lg max-w-142.5">{message}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
