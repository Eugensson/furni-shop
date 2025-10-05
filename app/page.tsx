import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { NewItems } from "@/components/new-items";
import { FeaturesSecond } from "@/components/features-second";

const Home = () => {
  return (
    <section className="relative w-full max-w-360 mx-auto bg-white overflow-hidden">
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
    </section>
  );
};

export default Home;
