"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";

export const FeaturesSecond = () => {
  return (
    <section id="features" className="py-12.5 lg:pt-40 lg:pb-17.5">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:gap-x-25">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex flex-col justify-end"
          >
            <h2 className="title">
              Premium Furniture Manufacturer for Modern Interiors
            </h2>
            <p className="subtitle">
              FurniturePower is an all-in-one platform for managing furniture
              production and design businesses. Ideal for studios and brands
              running multiple projects — simplify workflows and grow your
              creative future with FurniturePower.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1"
          >
            <Image
              src="/assets/features-2.png"
              width={554}
              height={443}
              alt="Modern interior furniture design"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
