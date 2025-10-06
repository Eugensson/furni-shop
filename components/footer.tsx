"use client";

import { motion } from "framer-motion";

import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

import { fadeIn } from "@/lib/variants";

export const Footer = () => {
  return (
    <footer className="section bg-primary">
      <div className="container text-white">
        <div className="pb-7 lg:pb-14 mb-14 flex flex-col lg:flex-row items-center justify-between border-b border-gray-700/75">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Logo className="mb-6 lg:mb-0" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Socials />
          </motion.div>
        </div>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="text-center"
        >
          &copy; FurniShop 2025 - All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};
