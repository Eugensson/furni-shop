import Image from "next/image";

export const FeaturesSecond = () => {
  return (
    <section className="py-10 lg:py-40">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:gap-x-25">
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title">
              Premium Furniture Manufacturer for Modern Interiors
            </h2>
            <p className="subtitle">
              FurniturePower is an all-in-one platform for managing furniture
              production and design businesses. Ideal for studios and brands
              running multiple projects — simplify workflows and grow your
              creative future with FurniturePower.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/features-2.png"
              width={554}
              height={443}
              alt="Modern interior furniture design"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
