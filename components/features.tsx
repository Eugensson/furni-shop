import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";

export const Features = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:gap-x-25">
          <div className="flex-1 order-1 lg:-order-1">
            <Image
              src="/assets/features-1.png"
              width={554}
              height={443}
              alt="Interior Design"
            />
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title">We Design Spaces that Inspire Living</h2>
            <p className="subtitle">
              Furniture Flow delivers smart solutions for stylish homes and
              modern interior design needs
            </p>
            <ul>
              <li className="mb-6 flex">
                <IoIosCheckmarkCircle className="mr-4 text-2xl lg:text-3xl" />
                <div>
                  <h3 className="mb-3 text-base lg:text-xl font-semibold">
                    Personalized Design Services
                  </h3>
                  <p>
                    Every project begins with your vision. We turn ideas into
                    timeless interior expressions.
                  </p>
                </div>
              </li>
              <li className="flex">
                <IoIosCheckmarkCircle className="mr-4 text-2xl lg:text-3xl" />
                <div>
                  <h3 className="mb-3 text-base lg:text-xl font-semibold">
                    Custom Furniture Development
                  </h3>
                  <p>
                    Crafted with precision and purpose, each piece fits your
                    lifestyle and home aesthetic.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
