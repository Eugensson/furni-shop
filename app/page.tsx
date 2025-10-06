import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Features } from "@/components/features";
import { Products } from "@/components/products";
import { NewItems } from "@/components/new-items";
import { Newsletter } from "@/components/newsletter";
import { Testimonial } from "@/components/testimonial";
import { FeaturesSecond } from "@/components/features-second";

const Home = () => {
  return (
    <section className="relative w-full max-w-360 mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonial />
      <Newsletter />
      <Footer />
    </section>
  );
};

export default Home;
