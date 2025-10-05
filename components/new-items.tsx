import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

import { NewItemsSlider } from "@/components/new-items-slider";

import { newInStoreData } from "@/lib/data";

export const NewItems = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 flex md:flex-col items-baseline gap-x-6">
            <h2 className="title max-w-61.25 lg:mt-7.5 lg:mb-22.5">
              New In Store Now
            </h2>
            <p className="max-w-61.25 lg:mb-12">
              Get the latest items immediately with promo prices
            </p>
            <div className="hidden lg:flex items-center">
              <Link
                href="/"
                className="flex items-center gap-2 font-medium hover:border-b hover:border-primary transition-all duration-300"
              >
                Check all
                <IoIosArrowRoundForward size={24} />
              </Link>
            </div>
          </div>
          <div className="lg:max-w-200 xl:max-w-247.5 lg:absolute lg:-right-24">
            <NewItemsSlider items={newInStoreData} />
          </div>
        </div>
      </div>
    </section>
  );
};
