import Image from "next/image";

import { TestimonialSlider } from "@/components/testimonial-slider";

import { testimonialData } from "@/lib/data";

export const Testimonial = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-10">
          <div className="lg:max-w-1/2">
            <h2 className="title mb-9">
              What Our Customers Say About Our Furniture
            </h2>
            <TestimonialSlider items={testimonialData} />
          </div>
          <div className="order-1 lg:my-auto">
            <Image
              src="/assets/testimonial.png"
              alt="testimonial"
              width={562}
              height={340}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
