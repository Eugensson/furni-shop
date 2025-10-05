import { Stats } from "@/components/stats";

export const Hero = () => {
  return (
    <section className="relative h-212.5 w-full pt-56.25 pb-63.5 mb-12 lg:mb-28 bg-hero bg-cover bg-right lg:bg-center bg-no-repeat text-white">
      <div className="container text-center">
        <h1 className="mb-7.5 lg:max-w-222 mx-auto text-2xl lg:text-[64px] font-semibold lg:leading-tight">
          Modern Living Elevate Your Home Design
        </h1>
        <p className="mb-7.5 lg:mb-16.25 max-w-156.25 mx-auto lg:text-xl">
          Transform your space with timeless pieces, crafted for comfort, style,
          and everyday elegance.
        </p>
        <button type="button" className="btn btn-cta mb-40 lg:mb-48.5">
          Shop Now
        </button>
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
};
