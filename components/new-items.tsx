"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

import { NewItemsSlider } from "@/components/new-items-slider";

import { fadeIn } from "@/lib/variants";
import { newInStoreData } from "@/lib/data";

export const NewItems = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 flex md:flex-col items-baseline gap-x-6">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="title max-w-61.25 lg:mt-7.5 lg:mb-22.5"
            >
              New In Store Now
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-61.25 lg:mb-12"
            >
              Get the latest items immediately with promo prices
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="hidden lg:flex items-center"
            >
              <Link
                href="/"
                className="flex items-center gap-2 font-medium hover:border-b hover:border-primary transition-all duration-300"
              >
                Check all
                <IoIosArrowRoundForward size={24} />
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:max-w-200 xl:max-w-247.5 lg:absolute lg:-right-24"
          >
            <NewItemsSlider items={newInStoreData} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
