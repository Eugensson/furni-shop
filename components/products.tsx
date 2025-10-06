"use client";

import { motion } from "framer-motion";

import { ProductSlider } from "@/components/product-slider";

import { fadeIn } from "@/lib/variants";
import { productData } from "@/lib/data";

export const Products = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="title"
          >
            Explore Our Premium Furniture Collection
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="subtitle max-w-160 mx-auto mb-12 lg:mb-17.5"
          >
            Discover modern and timeless furniture pieces crafted with superior
            quality materials — designed to elevate your home or workspace.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <ProductSlider products={productData} />
        </motion.div>
      </div>
    </section>
  );
};
