"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

import { statsData } from "@/lib/data";
import { fadeIn } from "@/lib/variants";

export const Stats = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section ref={sectionRef} className="p-12 bg-accent rounded-[20px]">
      <motion.ul
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-wrap gap-y-8"
      >
        {statsData.map(({ id, value, countText, text }, index) => (
          <li
            key={id}
            className="min-h-17.5 w-1/2 lg:flex-1 flex flex-col justify-center odd:border-r lg:even:border-r lg:even:last:border-none"
          >
            {isInView ? (
              <div>
                <CountUp
                  end={value}
                  duration={2.5}
                  delay={0.4 + index * 0.4}
                  className="text-2xl lg:text-4xl font-semibold"
                />
                <span className="text-2xl lg:text-4xl font-semibold">
                  {countText}
                </span>
              </div>
            ) : (
              <p className="text-2xl lg:text-4xl font-semibold">0</p>
            )}

            <p className="max-w-27.5 mx-auto text-base lg:text-xl font-light">
              {text}
            </p>
          </li>
        ))}
      </motion.ul>
    </section>
  );
};
