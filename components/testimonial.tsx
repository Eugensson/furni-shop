"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { TestimonialSlider } from "@/components/testimonial-slider";

import { fadeIn } from "@/lib/variants";
import { testimonialData } from "@/lib/data";

export const Testimonial = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:max-w-1/2"
          >
            <h2 className="title mb-9">
              What Our Customers Say About Our Furniture
            </h2>
            <TestimonialSlider items={testimonialData} />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="order-1 lg:my-auto"
          >
            <Image
              src="/assets/testimonial.png"
              alt="testimonial"
              width={562}
              height={340}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
